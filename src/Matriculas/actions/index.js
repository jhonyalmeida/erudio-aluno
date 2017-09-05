import servidor from './../../Core/services/ErudioServer'

export const CARREGAR_MATRICULA = 'CARREGAR_MATRICULA'
export const LISTAR_MATRICULAS = 'LISTAR_MATRICULAS'
export const CRIAR_MATRICULA = 'CRIAR_MATRICULA'
export const ATUALIZAR_MATRICULA = 'ATUALIZAR_MATRICULA'
export const REMOVER_MATRICULA = 'REMOVER_MATRICULA'

export function listarMatriculas() {
    const matriculas = servidor.listar('alunos/matriculas')
    return {
        type: LISTAR_MATRICULAS,
        payload: matriculas
    }
}