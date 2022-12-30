/**
 * @file
 * The main Scheduler entry point
 */

import {ScheduleFactory} from "./js/ScheduleFactory";
import {SchedulerConsole} from './js/Console/SchedulerConsole';

if(!Site.Scheduler) {
	//
	// Create the scheduler runtime component
	//
	Site.Scheduler = ScheduleFactory.create(Site);

	//
	// Install the console components
	//
	if(Site.Site.console !== undefined) {
		SchedulerConsole.setup(Site.Console);
	}
}

