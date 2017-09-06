import _ from 'lodash'
import { fulfilled } from './../../Core/helpers/actions'
import {
    LISTAR_MATRICULAS, 
    CARREGAR_MATRICULA, 
    CRIAR_MATRICULA, 
    ATUALIZAR_MATRICULA, 
    REMOVER_MATRICULA 
} from '../actions'

export default function(state = {}, action) {
    switch (action.type) {
        case fulfilled(CARREGAR_MATRICULA):
            return { ...state, [action.payload.id]: action.payload }
        case fulfilled(LISTAR_MATRICULAS):
            const newItens = _.mapKeys(action.payload, 'id')
            return { ...state, ...newItens }
        case fulfilled(CRIAR_MATRICULA):
        case fulfilled(ATUALIZAR_MATRICULA):
            return { ...state, [action.payload.id]: action.payload }
        case fulfilled(REMOVER_MATRICULA):
            return _.omit(state, action.payload)
        default:
            return state
    }
}
