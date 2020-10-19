<template>
	<div>
		<b-form @submit="onSubmit">
			<b-form-group
				class="name-label"
				label="Select Student:"
				label-for="name"
				label-cols-lg="2"
			>
				<b-form-select
					id="name"
					:options="[{ text: 'Choose...', value: null, disabled: true }, ...getStudents]"
					v-model="selected"
				></b-form-select>
			</b-form-group>

			<!-- <label class="mr-sm-2" for="name">Student Name:</label> -->

			<label class="mr-sm-2 ml-3" for="subject">Subjects:</label>
			<div v-for="(subject, idx) in form.subjects" :key="idx">
				<b-form-input
					class="my-3"
					v-model="subject.subName"
					required
					placeholder="Enter Subject"
				></b-form-input>
			</div>

			<b-button @click="addSub" variant="outline-success" class="mx-2"
				>Add Another Subject</b-button
			>
			<b-button @click="removeSub" variant="outline-danger" class="mx-2"
				>Remove Last Subject</b-button
			>

			<br />
			<br />

			<b-button type="submit" variant="primary">Save</b-button>
		</b-form>
	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

import { Student } from '../../api/Student.model';

export default {
	data() {
		return {
			selected: null,
			form: {
				name: '',
				subjects: [
					{
						subName: '',
					},
				],
				// subject: '',
			},
		};
	},
	computed: {},
	methods: {
		onSubmit(event) {
			event.preventDefault();

			console.log('form', this.selected, this.form.subject);
		},
		addSub() {
			this.form.subjects.push({ subName: '' });
		},
		removeSub() {
			this.form.subjects.pop();
		},
	},
	meteor: {
		$subscribe: {
			// Subscribes to the 'threads' publication with no parameters
			students: [],
		},
		getStudents() {
			let studs = Student.find({}).fetch();
			let names = studs.map(({ name }) => ({
				text: name,
				value: name,
			}));

			return names;
		},
	},
};
</script>

<style scoped>
#name {
	width: 40%;
	margin-left: -60px;
}
</style>
