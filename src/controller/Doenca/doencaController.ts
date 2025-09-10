import { Request, Response } from 'express';
import { DoencaService } from '../../service/Doenca/doencaService';

export class DoencaController {
 
  public static async addDoenca(req: Request, res: Response) {
    const doenca = req.body;
    const novaDoenca = await DoencaService.cadastrarDoenca(doenca);
    return res.status(201).json({ message: 'Doença cadastrada com sucesso!', doenca: novaDoenca });
  }


  public static async listarDoenca(req: Request, res: Response) {
    const doencas = await DoencaService.listarDoencas();
    return res.status(200).json(doencas);
  }


  public static async atualizarDoenca(req: Request, res: Response) {
    const {id} = req.params;
    const dadosAtualizados = req.body;
    const doencaAtualizada = await DoencaService.atualizarDoenca((id?parseInt(id):0), dadosAtualizados);
    return res.status(200).json({ message: 'Doença atualizada com sucesso!', doenca: doencaAtualizada });
  }

  
  public static async deletarDoenca(req: Request, res: Response) {
    const {id} = req.params;
    await DoencaService.deletarDoenca(id?parseInt(id):0)
    return res.status(200).json({ message: 'Doença deletada com sucesso!' });
  }
}
