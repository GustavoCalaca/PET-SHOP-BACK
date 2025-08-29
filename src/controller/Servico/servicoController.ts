import { Request, Response } from 'express';
import { ServicoService } from '../../service/Servico/servicoService';

export class ServicoController {


  public static async adicionarServico(req: Request, res: Response) {
    const servico = req.body;
    const novoServico = await ServicoService.cadastrarServico(servico);
    return res.status(201).json({ message: 'Serviço cadastrado com sucesso!', servico: novoServico });
  }

  
  public static async listarServicos(req: Request, res: Response) {
    const servicos = await ServicoService.listarServicos();
    return res.status(200).json(servicos);
  }

 
  public static async atualizarServico(req: Request, res: Response) {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    const servicoAtualizado = await ServicoService.atualizarServico(id, dadosAtualizados);
    return res.status(200).json({ message: 'Serviço atualizado com sucesso!', servico: servicoAtualizado });
  }

  
  public static async deletarServico(req: Request, res: Response) {
    const id = req.params.id;
    await ServicoService.deletarServico(id);
    return res.status(200).json({ message: 'Serviço deletado com sucesso!' });
  }
}
