import { Request, Response } from 'express';
import { DoencaService } from '../../service/Doenca/doencaService';

export class DoencaController {

  public static async addDoenca(req: Request, res: Response) {
    try {
      const doenca = req.body;
     await DoencaService.cadastrarDoenca(doenca);
      return res.status(201).json({ message: 'Doença cadastrada com sucesso!'});
    } catch (error) {
      console.error('Erro ao cadastrar doença:', error);
      return res.status(500).json({ message: 'Erro ao cadastrar doença.' });
    }
  }

  public static async listarDoenca(req: Request, res: Response) {
    try {
      const doenca = await DoencaService.listarDoenca();
      return res.status(200).json(doenca);
    } catch (error) {
      console.error('Erro ao listar doença:', error);
      return res.status(500).json({ message: 'Erro ao listar doença.' });
    }
  }

  

public static async alterarDoenca(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const dadosAlterados = req.body;

    await DoencaService.alterarDoenca(id ? parseInt(id) : 0, dadosAlterados);

    return res.status(200).json({
      message: 'Doença alterada com sucesso!',
      
    });
  } catch (error) {
    console.error('Erro ao alterar doença:', error);
    return res.status(500).json({ message: 'Erro ao alterar doença.' });
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
