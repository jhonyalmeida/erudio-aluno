import servidor from './../../Core/services/ErudioServer'

export const LISTAR_MATRICULAS = 'listar_matriculas'

export function listarMatriculas() {
    const matriculas = servidor.listar('matriculas')
    return {
        type: LISTAR_MATRICULAS,
        payload: matriculas
    }
}