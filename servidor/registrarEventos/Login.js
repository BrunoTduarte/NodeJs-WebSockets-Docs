import { encontrarUsuario } from "../db/usuariosDb.js";
import  autenticarUsuario  from "../utils/autenticarUsuario.js";
import gerarJwt from "../utils/gerarJwt.js";

function registrarEventosLogin(Socket, io){
    Socket.on("autenticar_usuario", async  ({nome, senha}) => {
        const usuario = await encontrarUsuario(nome);

        if (usuario){
            const autenticado = autenticarUsuario(senha, usuario);
    
            if (autenticado) {
                const tokenJwt = gerarJwt({nomeUsuario: nome});
              
                Socket.emit("autenticado_sucesso", tokenJwt);
            } else {
                Socket.emit("autenticado_erro");
            }
        } else {
            Socket.emit("usuario_nao_econtrado");
        }

    })
}

 
export default registrarEventosLogin;