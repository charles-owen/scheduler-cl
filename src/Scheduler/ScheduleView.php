<?php
/**
 * @file
 * View class for /cl/schedule/:tag
 *
 * Presents a schedule that users can edit.
 */

namespace CL\Scheduler;

use CL\Site\Site;
use CL\Course\View;
use CL\Site\System\Server;
use CL\Course\Member;

/**
 * View class for /cl/schedule/:tag
 */
class ScheduleView extends View {
	/**
	 * ScheduleView constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $properties Properties pass from the router
	 */
	public function __construct(Site $site, Server $server, array $properties) {
		parent::__construct($site, ['at-least'=>Member::STUDENT]);

		// Get the schedule information
		$tag = strip_tags($properties['tag']);
		$schedules = new Schedules($site->db);
		$schedule = $schedules->get($this->semester, $this->section->id, $tag);
		if($schedule === null) {
			$server->redirect($site->root . '/cl/invalid');
			return;
		}

		// Get any slots
		$slots = new Slots($site->db);
		$all = $slots->getBySchedule($schedule->id);
		$data = [];
		foreach($all as $slot) {
			$data[] = $slot->data();
		}
		$data = ['schedule'=>$schedule->data(),
			'slots'=>$data];

		if($schedule->teamingId > 0) {
			$teamings = new \CL\Team\Teamings($site->db);
			$team = $teamings->getTeamByMember2($this->user, $schedule->teamingId);
			if($team !== null) {
				$data['team'] = $team->data();
			} else {
				$data['team'] = null;
			}
		}

		$this->addJS('scheduler');
		$this->addCLS('cl-schedule-view', json_encode($data));
	}
}