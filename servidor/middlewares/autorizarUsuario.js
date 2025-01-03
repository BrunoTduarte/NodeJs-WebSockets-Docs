import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
    const tokenJwt = socket.handshake.auth.token;

    try {
        const payLoandToken = jwt.verify(tokenJwt, process.env.SEGREDO_JWT)

        socket.emit("autorizacao_sucesso", payLoandToken);
        
        next();

    } catch (erro) {
        next(erro);
    }
    

}

export default autorizarUsuario;