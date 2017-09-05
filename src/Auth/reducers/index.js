import _ from 'lodash'
import * as actions from '../actions'

const initState = {
    autenticado: localStorage.getItem('token') ? true : false
}

export default function(state = initState, action) {
    switch (action.type) {
        case actions.LOGIN_SUCESSO:
            return { ...state, autenticado: true }
        case actions.LOGOUT:
            return { ...state, autenticado: false }
        case actions.LOGIN_FALHA:
            return { ...state, error: action.payload }
        default:
            return state
    }
}