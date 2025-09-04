import { salvarUsuario } from "../repository/usuarioRepository";
import { Usuario } from "../types";

export const criarUsuarioService = async (usuario: Usuario) => {
  if (!usuario.nome || !usuario.email) {
    throw new Error("Nome e email são obrigatórios!");
  }
  return await salvarUsuario(usuario);
};
