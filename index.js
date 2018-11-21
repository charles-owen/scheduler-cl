/**
 * @file
 * The main Scheduler entry point
 */

import {ScheduleFactory} from "./js/ScheduleFactory";
import {SchedulerConsole} from './js/Console/SchedulerConsole';

//
// Create the scheduler runtime component
//
ScheduleFactory.create(Site.Site);

//
// Install the console components
//

if(Site.Site.console !== undefined) {
	SchedulerConsole.setup(Site.Site.console);
}
