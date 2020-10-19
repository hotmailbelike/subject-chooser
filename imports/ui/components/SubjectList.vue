<template></template>

<script>
export default {};
</script>

<style scoped></style>
<template>
	<div>
		<b-table class="table" striped :items="getSubjects" :fields="fields"></b-table>
	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

import { Student } from '../../api/Student.model';
import { Subject } from '../../api/Subject.model';

export default {
	data() {
		return {
			fields: ['Subject', 'Student(s)'],
		};
	},
	meteor: {
		$subscribe: {
			// Subscribes to the 'threads' publication with no parameters
			students: [],
			subjects: [],
		},
		getSubjects() {
			let studs = Student.find({}).fetch();
			let subs = Subject.find({}).fetch();

			let uniqueSubjects = subs.map(({ subjects }) => subjects).flat();
			uniqueSubjects = Array.from(new Set(uniqueSubjects.map(JSON.stringify))).map(
				JSON.parse
			);
			console.log('getSubjects -> uniqueSubjects', uniqueSubjects);

			let subjects = [];

			return studs;
		},
	},
};
</script>

<style scoped>
.table {
	width: 70%;
}
</style>
