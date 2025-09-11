import { Request, Response } from 'express';
import { ServicoService } from '../../service/Servico/servicoService';


export class ServicoController {

  public static async adicionarServico(req: Request, res: Response) {
    try {
      const servico = req.body;
      const novoServico = await ServicoService.cadastrarServico(servico);
      return res.status(201).json({ message: 'Serviço cadastrado com sucesso!', servico: novoServico });
    } catch (error) {
      console.error('Erro ao cadastrar serviço:', error);
      return res.status(500).json({ message: 'Erro ao cadastrar serviço.' });
    }
  }

  public static async listarServicos(req: Request, res: Response) {
    try {
      const servicos = await ServicoService.listarServicos();
      return res.status(200).json(servicos);
    } catch (error) {
      console.error('Erro ao listar serviços:', error);
      return res.status(500).json({ message: 'Erro ao listar serviços.' });
    }
  }

  public static async atualizarServico(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const dadosAtualizados = req.body;
      const servicoAtualizado = await ServicoService.atualizarServico(id ? parseInt(id) : 0, dadosAtualizados);
      return res.status(200).json({ message: 'Serviço atualizado com sucesso!', servico: servicoAtualizado });
    } catch (error) {
      console.error('Erro ao atualizar serviço:', error);
      return res.status(500).json({ message: 'Erro ao atualizar serviço.' });
    }
  }

  public static async deletarServico(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ServicoService.deletarServico(id ? parseInt(id) : 0);
      return res.status(200).json({ message: 'Serviço deletado com sucesso!' });
    } catch (error) {
      console.error('Erro ao deletar serviço:', error);
      return res.status(500).json({ message: 'Erro ao deletar serviço.' });
    }
  }
}
