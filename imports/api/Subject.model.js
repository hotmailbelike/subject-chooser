import { Mongo } from 'meteor/mongo';

export const Subject = new Mongo.Collection('subject');

if (Meteor.isServer) {
	Meteor.publish('subjects', () => {
		return Subject.find();
	});
}

Meteor.methods({
	saveSubject(subject) {
		Subject.insert(subject);
	},
});
