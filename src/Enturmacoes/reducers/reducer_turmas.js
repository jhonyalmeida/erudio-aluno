import _ from 'lodash'
import { LISTAR_TURMAS } from '../actions'

export default function(state = null, action) {
    switch (action.type) {
    case LISTAR_TURMAS:
        return _.mapKeys(action.payload, 'id')
    default:
        return state
    }
}