import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './../../Auth/reducers'
import matriculasReducer from './../../Matriculas/reducers'
import enturmacoesReducer from './../../Enturmacoes/reducers'
import disciplinasReducer from './../../Disciplinas/reducers'

const errorReducer = (state = null, action) => {
    return action.error ? action.payload : null
}

const pendingReducer = (state = {pending: false}, action) => {
    return action && action.type.endsWith('_PENDING') ? true : false
}

const rootReducer = combineReducers({
    matriculas: matriculasReducer,
    enturmacoes: enturmacoesReducer,
    disciplinas: disciplinasReducer,
    auth: authReducer,
    form: formReducer,
    error: errorReducer,
    pending: pendingReducer
})

export default rootReducer