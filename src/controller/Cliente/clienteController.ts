import { Request, Response } from 'express';
import { ClienteService } from '../../service/Cliente/clienteService';

export class ClienteController {
  
  public static addCliente(req: Request, res: Response) {

    const cliente = req.body;

    // if (!nome || !idade || !cpf) {
    //   return res.status(400).json({ error: 'Nome, idade e CPF são obrigatórios.' });
    // }

    ClienteService.cadastrarCliente(cliente);

    return res.status(201).json({ message: 'Cliente cadastrado com sucesso!', cliente });
    
  }

  public static async listarClientes(req: Request, res: Response) {

    const clientes = ClienteService.listarClientes();

    return res.status(200).json(clientes);
  }


}
