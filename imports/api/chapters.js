import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Chapters = new Mongo.Collection('chapters');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('chapters', function chaptersPublication() {
    return Chapters.find();
  });
}

Meteor.methods({
//   'chapters.insert'(text) {
//     check(text, String);

//     // Make sure the user is logged in before inserting a chapter
//     // if (! Meteor.userId()) {
//     //   throw new Meteor.Error('not-authorized');
//     // }

//     Chapters.insert({
//       text,
//       createdAt: new Date(),
//       owner: Meteor.userId(),
//       username: Meteor.user().username,
//     });
//   },
//   'tasks.remove'(taskId) {
//     check(taskId, String);

//     Chapters.remove(taskId);
//   },
//   'tasks.setChecked'(taskId, setChecked) {
//     check(taskId, String);
//     check(setChecked, Boolean);

//     Tasks.update(taskId, { $set: { checked: setChecked } });
//   },
});