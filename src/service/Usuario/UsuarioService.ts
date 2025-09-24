import { UsuarioRepository } from "../../repository/Usuario/UsuarioRepository";
import { UsuarioDto } from "../../controller/Usuario/Dto/UsuarioDto";

export class UsuarioService {
  static async addUsuario(usuario: UsuarioDto) {
    const id = await UsuarioRepository.salvar(usuario);
    return { ...usuario, id };
  }

  static listarUsuario() {
    return UsuarioRepository.listar();
  }

  static atualizarUsuario(id: number, dados: Partial<UsuarioDto>) {
    return UsuarioRepository.atualizar(id, dados);
  }

  static deletarUsuario(id: number) {
    return UsuarioRepository.deletar(id);
  }
}
