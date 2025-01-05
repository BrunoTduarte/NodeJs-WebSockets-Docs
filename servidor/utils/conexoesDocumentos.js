const conexoesDocumentos = [];

function adicionarConexao(conexao) {
    conexoesDocumentos.push(conexao);
}

function obteUsuariosDocumento(nomeDocumento) {
    return conexoesDocumentos
     .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
     .map((conexao) => conexao.nomeUsuario);
}

export { adicionarConexao, obteUsuariosDocumento };