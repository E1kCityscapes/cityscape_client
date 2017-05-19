import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import MainLayout from '../../common-ui/layouts/MainLayout';
import BluetoothLayout from '../../common-ui/layouts/BluetoothLayout';
import Home from '../../common-ui/pages/Home';
import ChapterIntroContainer from '../../common-ui/pages/ChapterIntroContainer'
import Perf from 'react-addons-perf';

if (process.env.NODE_ENV === 'development') {
  window.Perf = Perf;
}

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(BluetoothLayout, { content: () => <Home /> });
  },
});

FlowRouter.route('/chapters/:chapterId', {
  name: 'chapter-root',
  action(params, queryParams) {
    console.log(params, queryParams);
    mount(BluetoothLayout, { content: () => <ChapterIntroContainer chapterId={params.chapterId}/> });
  },
});

FlowRouter.route('/chapters/:chapterId/:skillId', {
  name: 'skill-root',
  action(params, queryParams) {
    console.log(params, queryParams);
    mount(BluetoothLayout, { content: () => <SkillChallengeRedirector/> });
  },
});

FlowRouter.route('/chapters/:chapterId/:skillId:/:challengeIdx', {
  name: 'challenge',
  action(params, queryParams) {
    console.log(params, queryParams);
    mount(BluetoothLayout, { content: () => <Challenge/> });
  },
});