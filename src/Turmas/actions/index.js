import servidor from './../../Core/services/ErudioServer'

export const LISTAR_TURMAS = 'listar_turmas'

export function listarTurmas() {
    const turmas = servidor.listar('turmas')
    return {
        type: LISTAR_TURMAS,
        payload: turmas
    }
}