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
}