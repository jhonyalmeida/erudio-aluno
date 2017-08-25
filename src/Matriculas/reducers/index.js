import { combineReducers } from 'redux'
import MatriculaReducer from './reducer_matriculas'

const rootReducer = combineReducers({
    matriculas: MatriculaReducer
})

export default rootReducer
