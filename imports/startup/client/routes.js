import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import MainLayout from '../../common-ui/layouts/MainLayout';
import BluetoothLayout from '../../common-ui/layouts/BluetoothLayout';
import Home from '../../common-ui/pages/Home';
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
    mount(BluetoothLayout, { content: () => <Home /> });
  },
});