import { combineReducers } from 'redux'
import authReducer from './Auth/reducers'
import matriculasReducer from './Matriculas/reducers'
import enturmacoesReducer from './Enturmacoes/reducers'
import disciplinasReducer from './Disciplinas/reducers'

const rootReducer = combineReducers({
    matriculas: matriculasReducer,
    enturmacoes: enturmacoesReducer,
    disciplinas: disciplinasReducer,
    auth: authReducer
})

export default rootReducer