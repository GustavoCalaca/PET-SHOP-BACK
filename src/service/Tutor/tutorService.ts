import { TutorDto} from '../../controller/Tutor/Dto/TutorDto';
import { TutorRepository} from '../../repository/Tutor/tutorRepository';

export class tutorService {
    public static async addTutor(tutor: TutorDto) {
        console.log('Tutor cadastrado com sucesso', tutor);
        return await TutorRepository.addTutor(tutor);
    }

    public static async listarTutor() {
        return await TutorRepository.listarTutor();
    }

    public static async updateTutor(id: number, tutor: TutorDto) {
        return await TutorRepository.updateTutor(id, tutor);
    }

    public static async deleteTutor(id: number) {
        return await TutorRepository.deleteTutor(id);
    }
}