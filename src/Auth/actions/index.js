import servidor from './../../Core/services/ErudioServer'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login(username, rawPassword, callback = () => {}) {
    const password = btoa(rawPassword)
    const request = servidor.criar('tokens', {username, password})
        .then(jwt => {
            localStorage.setItem('token', jwt.token)
            callback()
        })
    return {
        type: LOGIN,
        payload: request
    }
}

export function logout(callback = () => {}) {
    localStorage.removeItem('token')
    callback()
    return {
        type: LOGOUT
    }
}