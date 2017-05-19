import {
    Meteor
}
from 'meteor/meteor';
import {
    createContainer
}
from 'meteor/react-meteor-data';

import { Chapters } from '/imports/api/chapters.js';

import Menu from './Menu';

export default createContainer(
    () => {
        const chaptersHandle = Meteor.subscribe('chapters', {});
        const loading = !chaptersHandle.ready();
        return {
            loading, 
            chapters: Chapters.find({}).fetch()
        };
    }, Menu
)