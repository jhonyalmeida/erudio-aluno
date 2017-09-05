import servidor from './../../Core/services/ErudioServer'

export const LISTAR_ENTURMACOES = 'LISTAR_ENTURMACOES'

export function listarEnturmacoes(matricula) {
    const enturmacoes = servidor.listar(`alunos/matriculas/${matricula}/enturmacoes`);
    return {
        type: LISTAR_ENTURMACOES,
        payload: enturmacoes
    }
}