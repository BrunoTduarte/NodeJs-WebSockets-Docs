import {scryptSync, timingSafeEqual} from "crypto";

function autenticarUsuario(senhaDigitada, usuario) {
     const hashTest = scryptSync(senhaDigitada, usuario.salSenha, 64);
     
     const hasReal = Buffer.from(usuario.hashSenha, "hex");

     const autenticado = timingSafeEqual(hashTest, hasReal);

     return autenticado;
}

export default autenticarUsuario