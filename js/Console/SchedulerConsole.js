import {Member} from "course-cl/js/Members/Member";
import SchedulesEditorVue from './SchedulesEditor.vue';

/**
 * @file
 * Scheduler system console components
 */

export let SchedulerConsole = function() {
}

SchedulerConsole.setup = function(Console) {
    Console.tables.add({
        title: 'Scheduler',
        order: 22,
        api: '/api/scheduler/tables'
    });

	const page = {title: 'Main', route: '', order: 1};

	Console.components.addOption({
		atLeast: Member.TA,
		page: page,
		section: {title: 'Course', order: 5},
		title: 'Schedules',
		order: 11,
		route: '/schedules',
		routes: [
			{route: '/schedules', component: SchedulesEditorVue}
		]
	});

}

