import servidor from './../../Core/services/ErudioServer'

export const CARREGAR_MATRICULA = 'carregar_matricula'
export const LISTAR_MATRICULAS = 'listar_matriculas'
export const CRIAR_MATRICULA = 'criar_matricula'
export const ATUALIZAR_MATRICULA = 'atualizar_matricula'
export const REMOVER_MATRICULA = 'remover_matricula'

export function listarMatriculas() {
    const matriculas = servidor.listar('matriculas')
    return {
        type: LISTAR_MATRICULAS,
        payload: matriculas
    }
}