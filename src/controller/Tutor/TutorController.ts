import {Request, response} from 'express';
import {tutorService} from "../../service/Tutor/tutorService";

export class TutorController {
    public static async addTutor( req: Request, res: Response) {
        try {
            const tutor = req.body;
            const novoTutor = await tutorService.cadastrarTutor(tutor);
            return res.status(201).json({ message: 'Tutor cadastrado com sucesso!', tutor: novoTutor})
        }
    }
}