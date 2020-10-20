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
			fields: ['subject', 'student'],
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
			uniqueSubjects = Array.from(new Set(uniqueSubjects.map(JSON.stringify)))
				.map(JSON.parse)
				.map((sub) => {
					sub.subject = sub.subName;
					sub.student = '';
					delete sub.subName;
					return sub;
				});

			uniqueSubjects.forEach((uniqueSub) => {
				let { subject } = uniqueSub;
				subs.forEach(({ subjects, student }) => {
					subjects.forEach(({ subName }) => {
						if (subject === subName) {
							uniqueSub.student += student + ', ';
						}
					});
				});
				uniqueSub.student = uniqueSub.student.slice(0, uniqueSub.student.length - 2);
			});

			// console.log('getSubjects -> uniqueSubjects', uniqueSubjects);

			return uniqueSubjects;
		},
	},
};
</script>

<style scoped>
.table {
	width: 70%;
}
</style>
