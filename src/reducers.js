import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './Auth/reducers'
import matriculasReducer from './Matriculas/reducers'
import enturmacoesReducer from './Enturmacoes/reducers'
import disciplinasReducer from './Disciplinas/reducers'

const rootReducer = combineReducers({
    matriculas: matriculasReducer,
    enturmacoes: enturmacoesReducer,
    disciplinas: disciplinasReducer,
    auth: authReducer,
    form: formReducer
})

export default rootReducer