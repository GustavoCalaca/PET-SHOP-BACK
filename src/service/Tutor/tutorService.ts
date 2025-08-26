import { TutorDto} from '../../controller/Tutor/Dto/TutorDto';
import { TutorRepository} from '../../repository/Tutor/TutorRepository';

export class tutorService {
    public static async cadastrarTutor(tutor: TutorDto) {
        console.log('Tutor cadastrado com sucesso', tutor);
        return await TutorRepository.salvar(tutor);
    }

    public static async listarTutores() {
        return await TutorRepository.listar();
    }
}