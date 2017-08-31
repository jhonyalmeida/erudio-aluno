import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom'

import BarraSuperior from './Core/components/BarraSuperior'
import ListaMatriculas from './Matriculas/components/ListaMatriculas'
import ListaEnturmacoes from './Enturmacoes/components/ListaEnturmacoes'
import ListaDisciplinas from './Disciplinas/components/ListaDisciplinas'
import reducers from './reducers'
import 'typeface-roboto'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(promise)
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <BarraSuperior />
        <Switch>
          <Route path="/matriculas/:id/enturmacoes" component={ListaEnturmacoes} />
          <Route path="/matriculas" component={ListaMatriculas} />
          <Route path="/enturmacoes/:id/disciplinas" component={ListaDisciplinas} />
          <Route path="/" component={ListaMatriculas} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

//registerServiceWorker();
