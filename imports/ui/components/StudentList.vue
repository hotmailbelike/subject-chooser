<template>
	<div>
		<b-table class="table" striped :items="getStudents" :fields="fields"></b-table>
	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

import { Student } from '../../api/Student.model';
import { Subject } from '../../api/Subject.model';

export default {
	data() {
		return {
			fields: ['name', 'email', 'contact', 'subjects'],
			items: [
				{
					name: 40,
					email: 'Dickerson',
					phone: 'Macdonald',
					dateOfBirth: 'sad',
					subjects: ['sad', 'life'],
				},
				{
					name: 21,
					email: 'Larsen',
					phone: 'Shaw',
					dateOfBirth: 'sad',
					subjects: ['sad', 'life'],
				},
				{
					name: 89,
					email: 'Geneva',
					phone: 'Wilson',
					dateOfBirth: 'sad',
					subjects: ['sad', 'life'],
				},
				{
					name: 38,
					email: 'Jami',
					phone: 'Carney',
					dateOfBirth: 'sad',
					subjects: ['sad', 'life'],
				},
			],
		};
	},
	meteor: {
		$subscribe: {
			// Subscribes to the 'threads' publication with no parameters
			students: [],
			subjects: [],
		},
		getStudents() {
			let studs = Student.find({}).fetch();
			let subs = Subject.find({}).fetch();

			studs.forEach((stud) => {
				let name = stud.name;
				let idx = subs.findIndex(({ student }) => name === student);
				if (idx > -1) {
					let subjects = subs[idx].subjects.map(({ subName }) => subName).join(', ');
					stud.subjects = subjects;
				} else {
					stud.subjects = 'N/A';
				}
				return;
			});

			console.log(studs);

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
