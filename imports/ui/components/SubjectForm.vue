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
					required
					id="name"
					:options="[{ text: 'Choose...', value: null, disabled: true }, ...getStudents]"
					v-model="selected"
				></b-form-select>
			</b-form-group>

			<!-- <label class="mr-sm-2" for="name">Student Name:</label> -->
			<b-row>
				<b-col cols="1"><label for="subject">Subjects:</label></b-col>
				<b-col cols="2" id="subject" v-for="(subject, idx) in form.subjects" :key="idx">
					<b-form-input
						class="mb-3 ml-4"
						v-model="subject.subName"
						required
						placeholder="Enter Subject"
					></b-form-input
				></b-col>
			</b-row>

			<b-button @click="addSub" variant="outline-success">Add Another Subject</b-button>
			<b-button @click="removeSub" variant="outline-danger">Remove Last Subject</b-button>

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
				subjects: [
					{
						subName: '',
					},
				],
			},
		};
	},
	computed: {},
	methods: {
		onSubmit(event) {
			event.preventDefault();

			Meteor.call(
				'saveSubject',
				{ student: this.selected, subjects: this.form.subjects },
				(err, res) => {
					if (err) {
						console.log('onSubmit -> err', err);
					} else {
						console.log('onSubmit -> res', res);
					}
				}
			);

			this.selected = null;
			this.form = {
				subjects: [
					{
						subName: '',
					},
				],
			};
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

#subject {
	width: 40%;
}
</style>
