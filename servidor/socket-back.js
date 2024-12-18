
import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registratEventosDocumento from "./registrarEventos/Documento.js";
import registraEventosInicio from "./registrarEventos/Inicio.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registraEventosInicio(socket,io);
  registratEventosDocumento(socket, io);
  registrarEventosCadastro(socket,io);
}); 
