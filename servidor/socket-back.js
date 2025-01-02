import "dotenv/config";

import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registratEventosDocumento from "./registrarEventos/Documento.js";
import registraEventosInicio from "./registrarEventos/Inicio.js";
import  registrarEventosLogin  from "./registrarEventos/Login.js";

import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuario = io.of("/usuarios")

nspUsuario.use(autorizarUsuario);

nspUsuario.on("connection", (socket) => {
  registraEventosInicio(socket, nspUsuario);
  registratEventosDocumento(socket, nspUsuario);
})

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket,io);
  registrarEventosLogin(socket, io);
}); 
