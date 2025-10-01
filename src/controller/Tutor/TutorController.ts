import {Request, Response} from 'express';
import {tutorService} from "../../service/Tutor/tutorService";

export class TutorController {
    public static async addTutor( req: Request, res: Response) {
        try {
            const tutor = req.body;
            const novoTutor = await tutorService.addTutor(tutor);
            return res.status(201).json({ message: 'Tutor cadastrado com sucesso!',
            tutor: novoTutor});
        }
        catch(error: any){
            return res.status(400).json({ message: error.message })
        }

    }

    public static async listarTutor(req: Request, res: Response) {
        try {
          const servicos = await tutorService.listarTutor();
          return res.status(200).json(servicos);
        } catch (error) {
          console.error('Erro ao listar tutores:', error);
          return res.status(500).json({ message: 'Erro ao listar tutores.' });
        }
      }

      public static async alterarTutor(req: Request, res: Response) {
        try {
          const { id } = req.params;
          const dadosAlterados = req.body;
          const tutorAlterado = await tutorService.updateTutor(id ? parseInt(id) : 0, dadosAlterados);
      
          return res.status(200).json({
            message: 'Tutor alterado com sucesso!',
            tutor: tutorAlterado
          });
        } catch (error) {
          console.error('Erro ao alterar tutor:', error);
          return res.status(500).json({ message: 'Erro ao alterar tutor.' });
        }
      }

      public static async deletarTutor(req: Request, res: Response) {
        try {
          const { id } = req.params;
          await tutorService.deletarTutor(id ? parseInt(id) : 0);
          return res.status(200).json({ message: 'Tutor deletado com sucesso!' });
        } catch (error) {
          console.error('Erro ao deletar tutor:', error);
          return res.status(500).json({ message: 'Erro ao deletar tutor.' });
        }
      }

}