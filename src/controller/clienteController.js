import { Request, Response } from 'express';
import { ClienteService } from '../service/clienteService';
import { Cliente } from './Dto/Cliente';

export class ClienteController {
  public static addCliente(req: Request, res: Response) {
    const { nome, idade, cpf } = req.body;
    if (!nome || !idade || !cpf) {
      return res.status(400).json({ error: 'Nome, idade e CPF são obrigatórios.' });
    }
    const cliente: Cliente  = { nome, idade, cpf };
    ClienteService.cadastrarCliente(cliente);
    return res.status(201).json({ message: 'Cliente cadastrado com sucesso!', cliente });
  }
}
