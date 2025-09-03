import { TutorDto} from '../../controller/Tutor/Dto/TutorDto';
import { TutorRepository} from '../../repository/Tutor/TutorRepository';

export class TutorService {
    public static async cadastrarTutor(tutor: TutorDto) {
        console.log('Tutor cadastrado com sucesso', tutor);
        return await TutorRepository.cadastrarTutor(tutor);
    }

    public static async listarTutores() {
        return await TutorRepository.listarTutores();
    }
}