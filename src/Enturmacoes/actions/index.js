import servidor from './../../Core/services/ErudioServer'

export const LISTAR_ENTURMACOES = 'listar_enturmacoes'

export function listarEnturmacoes(matricula) {
    const enturmacoes = servidor.listar(`matriculas/${matricula}/enturmacoes`);
    return {
        type: LISTAR_ENTURMACOES,
        payload: enturmacoes
    }
}