import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Student = new Mongo.Collection('student');

if (Meteor.isServer) {
	Meteor.publish('students', () => {
		return Student.find();
	});
}

Meteor.methods({
	saveStudent(object) {
		check(object, Object);

		Student.insert({ ...object });
	},
});
