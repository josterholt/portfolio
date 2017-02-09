import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-module-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Portfolio from './modules/Portfolio';
import ItemList from './modules/Portfolio/components/ItemList';
import Http from 'cerebral-module-http';

const controller = Controller(Model({}));

controller.addModules({
  example: Portfolio(),
  http: Http({
  	baseUrl: '/data'
  })
});

ReactDOM.render(<Container controller={controller}><ItemList /></Container>, document.getElementById('root'));
