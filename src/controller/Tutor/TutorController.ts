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
        catch(error){
            return res.status(500).json({ message: 'Tutor não cadastrado!'})
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

}