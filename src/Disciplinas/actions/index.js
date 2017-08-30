import servidor from './../../Core/services/ErudioServer'

export const LISTAR_DISCIPLINAS = 'listar_disciplinas'

export function listarDisciplinas(enturmacao) {
    const disciplinas = servidor.listar(`enturmacoes/${enturmacao}/disciplinas`)
    return {
        type: LISTAR_DISCIPLINAS,
        payload: disciplinas
    }
}