import {
    Meteor
}
from 'meteor/meteor';
import {
    createContainer
}
from 'meteor/react-meteor-data';

import { Chapters } from '../api/chapters.js';

import Menu from '../pages/Menu';

export default createContainer(
    () => {
        const chaptersHandle = Meteor.subscribe('chapters');
        const loading = !chaptersHandle.ready();
        return {
            loading, 
            chapters: Chapters.find({}).fetch()
        };
    }, Menu
)