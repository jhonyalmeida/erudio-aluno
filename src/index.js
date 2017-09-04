import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { CircularProgress } from 'material-ui/Progress'

import BarraSuperior from './Core/components/BarraSuperior'
import ListaMatriculas from './Matriculas/components/ListaMatriculas'
import ListaEnturmacoes from './Enturmacoes/components/ListaEnturmacoes'
import ListaDisciplinas from './Disciplinas/components/ListaDisciplinas'
import Routing from './routing'
import reducers from './reducers'
import 'typeface-roboto'

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, promise)
))

let loadingState = false
const content = loadingState ? <CircularProgress size="50" /> : <Routing />

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <BarraSuperior />
        {content}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

//registerServiceWorker();
