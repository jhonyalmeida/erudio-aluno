import _ from 'lodash'
import { 
    LISTAR_MATRICULAS, 
    CARREGAR_MATRICULA, 
    CRIAR_MATRICULA, 
    ATUALIZAR_MATRICULA, 
    REMOVER_MATRICULA 
} from '../actions'

export default function(state = {}, action) {
    switch (action.type) {
        case CARREGAR_MATRICULA:
            return { ...state, [action.payload.id]: action.payload }
        case LISTAR_MATRICULAS:
            const newItens = _.mapKeys(action.payload, 'id')
            return { ...state, ...newItens }
        case CRIAR_MATRICULA:
        case ATUALIZAR_MATRICULA:
            return { ...state, [action.payload.id]: action.payload }
        case REMOVER_MATRICULA:
            return _.omit(state, action.payload)
        default:
            return state
    }
}
