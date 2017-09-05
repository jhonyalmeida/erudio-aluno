import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './Core/components/App'
import 'typeface-roboto'
import { login } from './Auth/actions'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, promise)
))

// console.log('testando login...')
// const loginAction = login('07800287912', 'warning')
// loginAction((action) => { console.log(action) })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

//registerServiceWorker();
