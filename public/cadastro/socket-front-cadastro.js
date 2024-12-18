
const socket = io()

function emitirCadastroUsuario(dados) {
    socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", () => alert("cadastro realizado com sucesso"))
socket.on("cadastro_erro", () => alert("erro no cadastro"))
socket.on("usuario_existente", () => alert("O usuario preechido ja existe"))

export {emitirCadastroUsuario} 