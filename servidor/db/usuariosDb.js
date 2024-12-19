import { criarHashSalSenha } from "../utils/criarHashSalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome) {
    return usuariosColecao.findOne({nome});
}

function cadastrarUsuario( {nome, senha} ){
    const { hashSenha, salSenha } = criarHashSalSenha(senha);

    return usuariosColecao.insertOne({nome, hashSenha, salSenha})
};

export {cadastrarUsuario, encontrarUsuario };