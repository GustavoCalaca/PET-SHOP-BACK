import { Request, Response } from "express";
import { criarUsuarioService } from "../service/usuarioService";
import { Usuario } from "../types";

export const addUsuario = async (req: Request, res: Response) => {
  try {
    const usuario: Usuario = req.body;
    const novoUsuario = await criarUsuarioService(usuario);
    res.status(201).json(novoUsuario);
  } catch (err: any) {
    res.status(500).json(Usuario);
  }
};
