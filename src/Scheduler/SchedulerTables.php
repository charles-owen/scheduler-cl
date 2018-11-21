<?php
/**
 * @file
 * Table maker for the Scheduler subsystem tables
 */

namespace CL\Scheduler;

use CL\Tables\Config;

/**
 * Table maker for the Scheduler subsystem tables
 */
class SchedulerTables extends \CL\Tables\TableMaker {

	/**
	 * Table maker for the Scheduler subsystem tables
	 * @param Config $config Database configuration object
	 */
	public function __construct(Config $config) {
		parent::__construct($config);

		$this->add(new Schedules($config));
		$this->add(new Slots($config));
	}
}
