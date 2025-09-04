import { Request, Response } from 'express';
import { TutorService } from '../../service/Tutor/tutorService';



export class TutorController {
  
    public static addTutor(req: Request, res: Response) {

        const tutor = req.body;

    
        TutorService.cadastrarTutor(tutor);
    
        return res.status(201).json({ message: 'Cliente cadastrado com sucesso!', tutor });
        
      }
    
      public static async listarTutores(req: Request, res: Response) {
    
        const tutor = TutorService.listarTutores();
    
        return res.status(200).json(tutor);
      }
    
    }