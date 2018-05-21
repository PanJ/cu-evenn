import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker'
import reducer from './redux'

const store = createStore(reducer)

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
