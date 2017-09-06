import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducers from './Core/reducers'
import App from './Core/components/App'
import 'typeface-roboto'
import { login } from './Auth/actions'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, promise())
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//registerServiceWorker();
