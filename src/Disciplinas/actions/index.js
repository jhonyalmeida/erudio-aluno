import servidor from './../../Core/services/ErudioServer'

export const LISTAR_DISCIPLINAS = 'LISTAR_DISCIPLINAS'

export function listarDisciplinas(enturmacao) {
    const disciplinas = servidor.listar(`alunos/enturmacoes/${enturmacao}/disciplinas`)
    return {
        type: LISTAR_DISCIPLINAS,
        payload: disciplinas
    }
}