import React from 'react'
import ReactDOM from 'react-dom'
import {createOvermind} from 'overmind'
import {Provider} from 'overmind-react'
import {config} from './overmind'
import './assets/tailwind.css'
import './assets/app.css'
import ItemList from './modules/Portfolio/components/ItemList'

const overmind = createOvermind(config, {
    devtools: '127.0.0.1:3031',
})

ReactDOM.render(
    <Provider value={overmind}>
        <ItemList />
    </Provider>,
    document.getElementById('root'),
)

if (module.hot) {
    module.hot.accept()
}
