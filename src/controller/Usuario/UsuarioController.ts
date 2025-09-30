import { Request, Response } from "express";
import { UsuarioService } from "../../service/Usuario/UsuarioService";
import { UsuarioDto } from "./Dto/UsuarioDto";

export class UsuarioController {

    /**
 *  Validações 
      nome: string;
      idade: number;
      dataAniversario: string;
      cpfCnpj: string;
      email: string;
      login: string;
      senha: string;
    */
  static async addUsuario(req: Request, res: Response) {
    try {
      
      const novoUsuario = await UsuarioService.addUsuario(req.body as UsuarioDto);
      res.status(201).json(novoUsuario);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao adicionar usuário" });
    }
  }

  static async listarUsuario(req: Request, res: Response) {
    try {
      res.json(await UsuarioService.listarUsuario());
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao listar usuários" });
    }
  }

      /**
     *  Validações 
      nome: string;
      idade: number;
      dataAniversario: string;
      cpfCnpj: string;
      email: string;
      login: string;
      senha: string;
    */
  static async atualizarUsuario(req: Request, res: Response) {
    try {
      const usuario = await UsuarioService.atualizarUsuario(Number(req.params.id), req.body);
      res.json(usuario);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao atualizar usuário" });
    }
  }

  /**
   * retirar o retorno deletado por que não está sendo usado e não faz sentido

   */
  static async deletarUsuario(req: Request, res: Response) {
    try {
      const deletado = await UsuarioService.deletarUsuario(Number(req.params.id));
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erro ao deletar usuário" });
    }
  }
}
