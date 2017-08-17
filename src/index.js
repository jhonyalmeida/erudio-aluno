import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import { BrowserRouter, Route } from 'react-router-dom'

import ListaTurmas from './Turmas/components/ListaTurmas'
import reducers from './Turmas/reducers'
import 'typeface-roboto'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <h1>Erudio - Professores</h1>
      <Route path="/turmas" component={ListaTurmas} />
    </div>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

//registerServiceWorker();
