import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import { Chapters } from '/imports/api/chapters.js';

import ChapterIntro from './ChapterIntro';

export default createContainer(
    ({chapterId}) => {
        const chaptersHandle = Meteor.subscribe('chapters', {chapterId});
        const loading = !chaptersHandle.ready();
        const chapter = Chapters.findOne({id: chapterId});
        const chapterExists = !loading && !!chapter;
        return {
            loading,
            chapter,
            chapterExists
        };
    }, ChapterIntro
)