import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ListaMatriculas from './Matriculas/components/ListaMatriculas'
import ListaEnturmacoes from './Matriculas/components/ListaEnturmacoes'
import reducers from './Matriculas/reducers'
import 'typeface-roboto'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h1>Erudio - Alunos</h1>
        <Switch>
          <Route path="/matriculas/:id/enturmacoes" component={ListaEnturmacoes} />
          <Route path="/matriculas" component={ListaMatriculas} />
          <Route path="/enturmacoes/:id/medias" component={ListaMedias} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

//registerServiceWorker();
