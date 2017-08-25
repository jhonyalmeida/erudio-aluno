import servidor from './../../Core/services/ErudioServer'

export const LOGIN = 'login'

export function login(username, password) {
    servidor.criar('tokens', {username, password})
        .then((token) => localStorage.setItem('token', token));
    
    return {
        type: LOGIN,
        payload: matriculas
    }
}