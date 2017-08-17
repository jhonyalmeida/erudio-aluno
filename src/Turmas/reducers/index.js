import { combineReducers } from 'redux'
import TurmaReducer from './reducer_turmas'

const rootReducer = combineReducers({
    turmas: TurmaReducer
})

export default rootReducer
