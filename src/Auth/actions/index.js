import servidor from './../../Core/services/ErudioServer'
//import { browserHistory } from 'react-router'

export const LOGIN_SUCESSO = 'LOGIN_SUCESSO'
export const LOGIN_FALHA = 'LOGIN_FALHA'
export const LOGOUT = 'LOGOUT'

export function login(username, password, callback) {
    return (dispatch) => {
        const encodedPassword = btoa(password)
        servidor.criar('tokens', {username, encodedPassword})
            .then((token) => {
                dispatch({type: LOGIN_SUCESSO})
                localStorage.setItem('token', token)
                callback()
            })
            .catch((error) => {
                dispatch({type: LOGIN_FALHA, payload: error.message})
            })
    }
}

export function logoff(callback) {
    localStorage.removeItem('token')
    callback()
    return {
        type: LOGOUT
    }
}