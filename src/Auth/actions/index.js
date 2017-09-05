import servidor from './../../Core/services/ErudioServer'

export const LOGIN_SUCESSO = 'LOGIN_SUCESSO'
export const LOGIN_FALHA = 'LOGIN_FALHA'
export const LOGOUT = 'LOGOUT'

export function login(username, rawPassword, callback) {
    return (dispatch) => {
        const password = btoa(rawPassword)
        servidor.criar('tokens', {username, password})
            .then(jwt => {
                localStorage.setItem('token', jwt.token)
                dispatch({type: LOGIN_SUCESSO})
                callback()
            })
            .catch((error) => {
                console.log('erro de login')
                dispatch({type: LOGIN_FALHA, payload: error.message})
            })
    }
}

export function logout(callback = () => {}) {
    localStorage.removeItem('token')
    callback()
    return {
        type: LOGOUT
    }
}