import _ from 'lodash'
import { fulfilled } from './../../Core/helpers/actions'
import { LISTAR_DISCIPLINAS } from '../actions'

export default function(state = {}, action) {
    if (action.error) {
        return state
    }
    switch (action.type) {
        case fulfilled(LISTAR_DISCIPLINAS):
            const newItens = _.mapKeys(action.payload, 'id')
            return { ...state, ...newItens }
        default:
            return state
    }
}
