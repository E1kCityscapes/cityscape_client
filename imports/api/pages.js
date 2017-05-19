import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Pages = new Mongo.Collection('pages');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.pages('chapters', function chaptersPublication(params) {
    const {pageId} = params;
    if (!!pageId) {
      return Pages.find({
        id: pageId
      });
    } else {
      return Pages.find();
    }
    
  });
}