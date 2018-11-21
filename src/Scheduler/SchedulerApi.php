<?php
/**
 * @file
 * API Resource for /api/scheduler
 */
namespace CL\Scheduler;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;
use CL\Site\Api\APIException;
use CL\Users\User;
use CL\Course\Members;
use CL\Course\Member;

/**
 * API Resource for /api/scheduler
 */
class SchedulerApi extends \CL\Users\Api\Resource {

	/**
	 * QuizApi constructor.
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Dispatch API calls.
	 * @param Site $site Site object
	 * @param Server $server Server object
	 * @param array $params Parameters passed by the router (after /api/quiz)
	 * @param array $properties Properties passed by the router (:id values)
	 * @param int $time Current time
	 * @return JsonAPI with response filled in
	 * @throws APIException
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {
		$user = $this->isUser($site, User::USER);

		switch($params[0]) {
			case 'schedules':
				return $this->schedules($site, $server, $params);

			case 'slots':
				return $this->slots($site, $server, $params, $time);

			case 'tables':
				return $this->tables($site, $server, new SchedulerTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

	private function slots(Site $site, Server $server, array $params, $time) {
		$user = $this->isUser($site, Member::USER);
		$slots = new Slots($site->db);

		if(count($params) < 2) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}
		$scheduleId = +$params[1];

		if($server->requestMethod === 'POST' && count($params) > 2) {
			$post = $server->post;

			switch($params[2]) {
				case 'new':
					$this->isUser($site, Member::TA);
					$slot = new Slot();
					$this->ensure($post, ['time', 'duration', 'location', 'repeat']);
					$repeat = +$post['repeat'];
					if($repeat > 100) {
						$repeat = 100;
					}

					$slot->time = +$post['time'];
					$slot->scheduleId = $scheduleId;
					$slot->duration = +$post['duration'];
					$slot->location = strip_tags($post['location']);

					for($i=0; $i<$repeat; $i++) {
						$slots->add($slot, $time);
						$slot->time = $slot->time + ($slot->duration * 60);
					}

					break;

				case 'update':
					$this->isUser($site, Member::TA);
					$slot = new Slot();
					$this->ensure($post, ['id', 'time', 'duration', 'location']);
					$slot->id = +$post['id'];
					$slot->time = +$post['time'];
					$slot->duration = +$post['duration'];
					$slot->location = strip_tags($post['location']);

					$slots->update($slot, $time);
					break;

				case 'delete':
					$this->isUser($site, Member::TA);
					$this->ensure($post, ['id']);
					$slots->delete(+$post['id']);
					break;

				case 'book':
					$this->ensure($post, ['id', 'teamMode']);
					$slotId = +$post['id'];
					if($slots->slotHasBooking($slotId)) {
						throw new APIException('Schedule slot is already booked.');
					}

					if(+$post['teamMode'] === 1) {
						$teamId = +$post['teamId'];

						if($slots->teamHasBooking($scheduleId, $teamId, $time)) {
							throw new APIException('Team already has a future booking.');
						}

						$slots->book($slotId, $user, $time, $teamId);
					} else {
						$slots->book($slotId, $user, $time);
					}
					break;

				case 'unbook':
					$this->ensure($post, ['id']);
					$slotId = +$post['id'];
					$slot = $slots->get($slotId);

					if(!$user->atLeast(Member::STAFF)) {
						if($slot->time < $time) {
							throw new APIException('Cannot delete past events', APIException::NOT_AUTHORIZED);
						}

						$schedules = new Schedules($site->db);
						$schedule = $schedules->getById($scheduleId);

						if($schedule->teamingId > 0) {
							$teamMembers = new \CL\Team\TeamMembers($site->db);
							if(!$teamMembers->isMember($slot->teamId, $user->member->id)) {
								throw new APIException('Not authorized', APIException::NOT_AUTHORIZED);
							}

						} else {
							if($user->member->id !== $slot->memberId) {
								throw new APIException('Not authorized', APIException::NOT_AUTHORIZED);
							}
						}
					}

					$slots->unbook($slotId, $time);
					break;
			}

		}

		$json = new JsonAPI();

		// Get any slots
		$slots = new Slots($site->db);
		$all = $slots->getBySchedule($scheduleId);

		$data = [];
		foreach($all as $slot) {
			$data[] = $slot->data();
		}

		$json->addData('slots', 0, $data);
		return $json;
	}

	private function schedules(Site $site, Server $server, array $params) {
		$user = $this->isUser($site, Member::TA);
		$schedules = new Schedules($site->db);

		if($server->requestMethod === 'POST' && count($params) > 1) {

			switch($params[1]) {
				case 'new':
					$schedule = new Schedule();
					$post = $server->post;
					$this->ensure($post, ['tag', 'name', 'teaming']);
					$schedule->tag = strip_tags($post['tag']);
					$schedule->name = strip_tags($post['name']);
					$schedule->teamingId = +$post['teaming'] !== 0 ? +$post['teaming'] : 0;
					$schedule->semester = $user->member->semester;
					$schedule->sectionId = $user->member->sectionId;

					$schedules->add($schedule);
					break;

				case 'update':
					$schedule = new Schedule();
					$post = $server->post;
					$this->ensure($post, ['id', 'tag', 'name', 'teaming']);
					$schedule->id = +$post['id'];
					$schedule->tag = strip_tags($post['tag']);
					$schedule->name = strip_tags($post['name']);
					$schedule->teamingId = +$post['teaming'] !== 0 ? +$post['teaming'] : 0;
					$schedule->semester = $user->member->semester;
					$schedule->sectionId = $user->member->sectionId;

					$schedules->update($schedule);
					break;

				case 'delete':
					$post = $server->post;
					$this->ensure($post, ['id']);
					$schedules->delete(+$post['id']);
					break;
			}

		}


		$json = new JsonAPI();

		$all = $schedules->getBySection($user->member->semester, $user->member->sectionId);
		$data = [];
		foreach($all as $schedule) {
			$data[] = $schedule->data();
		}

		$json->addData('schedules', 0, $data);

		// Is the teaming system installed?
		if($site->installed('team')) {
			$teamings = new \CL\Team\Teamings($site->db);
			$all = $teamings->getBySection($user->member->semester, $user->member->sectionId);
			$data = [];
			foreach($all as $teaming) {
				$data[] = $teaming->data();
			}

			$json->addData('teamings', 0, $data);
		}

		return $json;
	}

}