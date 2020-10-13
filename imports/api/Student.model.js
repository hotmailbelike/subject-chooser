import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Student = new Mongo.Collection('student');

Meteor.methods({
	'student.insert'(object) {
		check(object, Object);

		Student.insert({ ...object });
	},
});
