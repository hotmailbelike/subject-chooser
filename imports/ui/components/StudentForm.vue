<template>
	<div>
		<b-form @submit="onSubmit" v-if="show">
			<b-form-group id="name" label="Student Name:" label-for="name">
				<b-form-input id="name" v-model="form.name" required placeholder="Enter name">
				</b-form-input>
			</b-form-group>

			<b-form-group id="email" label="Student Email:" label-for="email">
				<b-form-input
					id="email"
					v-model="form.email"
					type="email"
					required
					placeholder="Enter email"
				></b-form-input>
			</b-form-group>

			<b-form-group id="contact" label="Contact:" label-for="contact">
				<b-form-input
					id="contact"
					v-model="form.contact"
					type="text"
					required
					placeholder="Enter contact"
				></b-form-input>
			</b-form-group>

			<b-form-group id="dob" label="Date of Birth:" label-for="dob">
				<b-form-input id="dob" v-model="form.dob" type="date" required></b-form-input>
			</b-form-group>

			<b-button type="submit" variant="primary">Submit</b-button>
		</b-form>
		<!-- <b-card class="mt-3" header="Form Data Result">
			<pre class="m-0">{{ form }}</pre>
		</b-card> -->
	</div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

import { Student } from '../../api/Student.model';

export default {
	data() {
		return {
			form: {
				email: '',
				name: '',
				contact: '',
				dob: null,
			},

			show: true,
		};
	},
	methods: {
		onSubmit(evt) {
			evt.preventDefault();
			// alert(JSON.stringify(this.form));

			// Student.insert({
			// 	email: this.form.email,
			// 	name: this.form.name,
			// 	contact: this.form.contact,
			// 	dob: this.form.dob,
			// });

			Meteor.call('saveStudent', this.form, (err, res) => {
				if (err) {
					console.log('onSubmit -> err', err);
				} else {
					console.log('onSubmit -> res', res);
				}
			});

			this.form = {
				email: '',
				name: '',
				contact: '',
				dob: null,
			};
		},
	},
};
</script>
