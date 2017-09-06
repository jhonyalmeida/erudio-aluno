import _ from 'lodash'
import { fulfilled, rejected } from './../../Core/helpers/actions'
import { LOGIN, LOGOUT } from '../actions'

const initState = {
    autenticado: localStorage.getItem('token') ? true : false
}

export default function(state = initState, action) {
    switch (action.type) {
        case fulfilled(LOGIN):
            return { ...state, autenticado: true }
        case LOGOUT:
            return { ...state, autenticado: false }
        default:
            return state
    }
}