<?php
/**
 * @file
 * Handle polling requests to the scheduler system
 */

namespace CL\Scheduler;

use CL\Site\Api\JsonAPI;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Course\Member;

/**
 * Handle polling requests to the Interact system
 */
class SchedulerPolling {

	/**
	 * Handle a polling request
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $post Post parameters, just the 'interact' parts
	 * @param JsonAPI $json
	 * @param int $time
	 */
	public function poll(Site $site, Server $server, array $post, JsonAPI $json, $time) {
		$user = $site->users->user;
		if($user === null) {
			// If the user is logged out
			return;
		}
//print_r($post);
		//
		// Discover any new summaries that are now available
		//
		if(isset($post['after'])) {
			$after = +$post['after'];
			$scheduleId = +$post['scheduleId'];

			$slots = new Slots($site->db);
			if($slots->fresh($scheduleId, $after)) {
				// Get any slots
				$all = $slots->getBySchedule($scheduleId);

				$data = [];
				foreach($all as $slot) {
					$data[] = $slot->data();
				}

				$json->addData('slots', 0, $data);
			}
		}
	}
}