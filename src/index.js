import React from 'react'
import ReactDOM from 'react-dom'
import {createOvermind} from 'overmind'
import {Provider} from 'overmind-react'
import {config} from './overmind'
//import './assets/main.css'
import './assets/tailwind.css'

const overmind = createOvermind(config)

import Portfolio from './modules/Portfolio'
import ItemList from './modules/Portfolio/components/ItemList'
// import Http from 'cerebral-module-http';

// const controller = Controller(Model({}));

// controller.addModules({
//   example: Portfolio(),
//   http: Http({
//   	baseUrl: '/data'
//   })
// });

ReactDOM.render(
    <Provider value={overmind}>
        <ItemList />
    </Provider>,
    document.getElementById('root'),
)
