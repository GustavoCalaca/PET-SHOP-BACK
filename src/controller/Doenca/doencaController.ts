
import { Request, Response } from 'express';
import { ClienteService } from '../../service/Cliente/clienteService';

export class ClienteController {
 
  public static async addDoenca(req: Request, res: Response) {
    const doenca = req.body;
    const novaDoenca = await DoencaService.cadastrarCliente(doenca);
    return res.status(201).json({ message: 'Doença cadastrada com sucesso!', doenca: novaDoenca });
  }


  public static async listarDoenca(req: Request, res: Response) {
    const doencas = await DoencaService.listarClientes();
    return res.status(200).json(doencas);
  }


  public static async atualizarDoenca(req: Request, res: Response) {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    const doencaAtualizada = await DoencaService.atualizarCliente(id, dadosAtualizados);
    return res.status(200).json({ message: 'Doença atualizada com sucesso!', doenca: doencaAtualizada });
  }

  
  public static async deletarDoenca(req: Request, res: Response) {
    const id = req.params.id;
    await DoencaService.deletarCliente(id);
    return res.status(200).json({ message: 'Doença deletada com sucesso!' });
  }
}
