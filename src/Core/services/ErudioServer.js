import axios from 'axios'
import { toast } from 'react-toastify'

const URL_BASE = 'http://beta.erudio.itajai.sc.gov.br/servicos/web/api'

const servidor = axios.create({
    baseURL: URL_BASE,
    timeout: 8000
});

const getHeaders = () => {
    let headers = {}
    if (localStorage.getItem('token')) {
        headers['JWT-Authorization'] = 'Bearer ' + window.localStorage.getItem('token')
    }
    return headers
}

const handleError = (error) => {
    const message = error.response && error.response.data.error 
        ? error.response.data.error.message
        : error.message
    toast(message, {type: 'error'})
    return Promise.reject(message)
}

const listar = (recurso, params = {}) => {
    return servidor.get(`${URL_BASE}/${recurso}`, { params, headers: getHeaders() })
        .then(response => Promise.resolve(response.data))
        .catch(handleError)
}

const carregar = (recurso, id) => {
    return servidor.get(`${URL_BASE}/${recurso}/${id}`, { headers: getHeaders() })
        .then(response => Promise.resolve(response.data))
        .catch(handleError)
}

const criar = (recurso, payload) => {
    return servidor.post(`${URL_BASE}/${recurso}`, payload, { headers: getHeaders() })
        .then(response => Promise.resolve(response.data))
        .catch(handleError)
}

const atualizar = (recurso, id, payload) => {
    return servidor.put(`${URL_BASE}/${recurso}/${id}`, payload, { headers: getHeaders() })
        .then(response => Promise.resolve(response.data))
        .catch(handleError)
}

const remover = (recurso, id) => {
    return servidor.delete(`${URL_BASE}/${recurso}/${id}`, { headers: getHeaders() })
        .then(response => Promise.resolve())
        .catch(handleError)
}

export default {
    listar, carregar, criar, atualizar, remover
}