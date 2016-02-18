import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'cerebral-module-router';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Example from './modules/Example';
import ItemList from './modules/Example/components/ItemList';

const controller = Controller(Model({}));

controller.modules({
  example: Example(),
});

ReactDOM.render(<Container controller={controller}><ItemList /></Container>, document.getElementById('root'));
