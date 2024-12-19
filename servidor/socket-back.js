import "dotenv/config";

import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registratEventosDocumento from "./registrarEventos/Documento.js";
import registraEventosInicio from "./registrarEventos/Inicio.js";
import  registrarEventosLogin  from "./registrarEventos/Login.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventosCadastro(socket,io);
  registrarEventosLogin(socket, io);
  registraEventosInicio(socket,io);
  registratEventosDocumento(socket, io);
}); 
