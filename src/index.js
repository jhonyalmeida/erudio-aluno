import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom'

import BarraSuperior from './Core/components/BarraSuperior'
import ListaMatriculas from './Matriculas/components/ListaMatriculas'
import ListaEnturmacoes from './Enturmacoes/components/ListaEnturmacoes'
import ListaDisciplinas from './Disciplinas/components/ListaDisciplinas'
import reducers from './reducers'
import 'typeface-roboto'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, promise)
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <BarraSuperior /> 
          <Switch>
            <Route exact path="/" component={ListaMatriculas} />
            <Route exact path="/matriculas" component={ListaMatriculas} />
            <Route path="/matriculas/:id/enturmacoes" component={ListaEnturmacoes} />
            <Route path="/enturmacoes/:id/disciplinas" component={ListaDisciplinas} />
          </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

//registerServiceWorker();
