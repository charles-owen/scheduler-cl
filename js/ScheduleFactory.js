/**
 * @file
 * The Schedule system creation factory.
 */

import {PageVue} from 'site-cl/js/Vue/PageVue';
import PageNav from 'site-cl/js/Vue/PageNav.vue';
import ScheduleVue from './ScheduleVue.vue';

export const ScheduleFactory = function() {
}

ScheduleFactory.create = function(site) {

 	site.ready(() => {
	    PageVue.create('div.cl-schedule-view', 'Schedule', ScheduleVue,
			{ nav: PageNav, replace: true } );
	});

	 return true
}
