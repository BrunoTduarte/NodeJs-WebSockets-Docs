const socket = io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticado_sucesso", () =>{
    (alert("Autenticação ocorrida com sucesso"))
    window.location.replace("/");

});
socket.on("autenticado_erro", () => alert("Falha na Autenticação do Usuario Senha ou Usuario Incorreto"))
socket.on("usuario_nao_econtrado", () => alert("Usuario não encontrado no Banco de Dados"))

export  {emitirAutenticarUsuario};