import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueMeteorTracker);

import App from '../imports/ui/App.vue';

Meteor.startup(() => {
	new Vue({
		el: '#app',
		...App,
	});
});
