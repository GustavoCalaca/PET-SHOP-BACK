import { Request, Response } from 'express';
import { DoencaService } from '../../service/Doenca/doencaService';
import { DoencaDto } from "./Dto/Dtodoenca";

export class DoencaController {

  public static async addDoenca(req: Request, res: Response) {
    try {
      const doenca = req.body;
      const novaDoenca = await DoencaService.cadastrarDoenca(doenca);
      return res.status(201).json({ message: 'Doença cadastrada com sucesso!', doenca: novaDoenca });
    } catch (error) {
      console.error('Erro ao cadastrar doença:', error);
      return res.status(500).json({ message: 'Erro ao cadastrar doença.' });
    }
  }

  public static async listarDoenca(req: Request, res: Response) {
    try {
      const doencas = await DoencaService.listarDoencas();
      return res.status(200).json(doencas);
    } catch (error) {
      console.error('Erro ao listar doenças:', error);
      return res.status(500).json({ message: 'Erro ao listar doenças.' });
    }
  }

  public static async atualizarDoenca(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const dadosAtualizados = req.body;
      const doencaAtualizada = await DoencaService.atualizarDoenca(id ? parseInt(id) : 0, dadosAtualizados);
      return res.status(200).json({ message: 'Doença atualizada com sucesso!', doenca: doencaAtualizada });
    } catch (error) {
      console.error('Erro ao atualizar doença:', error);
      return res.status(500).json({ message: 'Erro ao atualizar doença.' });
    }
  }

  public static async deletarDoenca(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await DoencaService.deletarDoenca(id ? parseInt(id) : 0);
      return res.status(200).json({ message: 'Doença deletada com sucesso!' });
    } catch (error) {
      console.error('Erro ao deletar doença:', error);
      return res.status(500).json({ message: 'Erro ao deletar doença.' });
    }
  }
}
