import React from 'react'
import ReactDOM from 'react-dom'
import {createOvermind} from 'overmind'
import {Provider} from 'overmind-react'
import {config} from './overmind'
import './assets/tailwind.css'

const overmind = createOvermind(config, {
    devtools: '127.0.0.1:3031',
})

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

if (module.hot) {
    module.hot.accept()
}
