import { combineReducers } from 'redux'
import matriculasReducer from './Matriculas/reducers'
import enturmacoesReducer from './Enturmacoes/reducers'
import disciplinasReducer from './Disciplinas/reducers'

const rootReducer = combineReducers({
    matriculas: matriculasReducer,
    enturmacoes: enturmacoesReducer,
    disciplinas: disciplinasReducer
})

export default rootReducer