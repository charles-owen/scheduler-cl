<?php
/**
 * @file
 * Plugin class for the Scheduler Subsystem
 */

namespace CL\Scheduler;

use CL\Console\ConsoleView;
use CL\Site\Site;
use CL\Site\Router;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;

/**
 * Plugin class for the Scheduler Subsystem
 */
class SchedulerPlugin extends \CL\Site\Plugin {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'scheduler';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['course'];}

	/**
	 * Install the plugin
	 * @param Site $site The Site configuration object
	 */
	public function install(Site $site) {
		$site->install('scheduler', $this);
		$this->site = $site;
	}


	/**
	 * AssignmentCategory and Assignment are extended with
	 * the grading components.
	 * @param Site $site The site configuration component
	 */
	public function ensureTables(Site $site) {
//		$maker = new TeamTables($site->db);
//		$maker->create(false);
	}

	/**
	 * Amend existing object
	 * The Router is amended with routes for the login page
	 * and for the user API.
	 * @param $object Object to amend.
	 */
	public function amend($object) {
		if($object instanceof Router) {
			$router = $object;

			$router->addRoute(['schedule', ':tag'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new ScheduleView($site, $server, $properties);
				return $view->vue();
			});

			$router->addPolling(function(Site $site, Server $server, $post, JsonAPI $json, $time) {
				if(isset($post['scheduler'])) {
					$polling = new SchedulerPolling();
					$polling->poll($site, $server, $post['scheduler'], $json, $time);
				}
			});

			$router->addRoute(['api', 'scheduler', '*'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$resource = new SchedulerApi();
				return $resource->apiDispatch($site, $server, $params, $properties, $time);
			});

		} else if($object instanceof ConsoleView) {
			$object->addJS('scheduler');
		}
	}

	private $site;
}