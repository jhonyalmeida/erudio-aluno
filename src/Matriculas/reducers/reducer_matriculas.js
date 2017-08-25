import _ from 'lodash'
import { LISTAR_MATRICULAS } from '../actions'

export default function(state = null, action) {
    switch (action.type) {
    case LISTAR_MATRICULAS:
        return _.mapKeys(action.payload, 'id')
    default:
        return state
    }
}