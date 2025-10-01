import { TutorDto} from '../../controller/Tutor/Dto/TutorDto';
import { TutorRepository} from '../../repository/Tutor/tutorRepository';

export class tutorService {
    public static async addTutor(tutor: TutorDto) {
        if (!tutor.nome || !tutor.cpf || !tutor.dataNascimento || !tutor.idade || !tutor.rg || !tutor.genero) {
            throw new Error('Preencha todos os campos pendentes do tutor');
        }

        if (!tutor.endereco) {
            throw new Error('Endereço é obrigatório.');
        }
        
        if (!tutor.endereco.bairro || !tutor.endereco.cep || !tutor.endereco.cidade || !tutor.endereco.logradouro || !tutor.endereco.numero) {
            throw new Error('Preencha todos os campos pendentes do seu endereço');
        }
        
        if (!tutor.contatos || tutor.contatos.length === 0){
            throw new Error('É necessário fornecer pelo menos um contato.');
        }

        for (const contato of tutor.contatos){
            if (!contato.nome || !contato.telefone || !contato.email){
                throw new Error('Preencha todos os campos pendentes do contato');
            } 
        }

        if (!tutor.pet || tutor.pet.length === 0){
            throw new Error('É necessário fornecer pelo menos um pet.');
        }

        for (const pet of tutor.pet){
            if (!pet.genero || !pet.idade || !pet.nome || !pet.peso || !pet.porte|| !pet.raca || !pet.tipo){
                throw new Error('Preencha todos os campos pendentes do pet');
            } 
        }

        console.log('Tutor cadastrado com sucesso', tutor);
        return await TutorRepository.addTutor(tutor);
    }

    public static async listarTutor() {
        return await TutorRepository.listarTutor();
    }

    public static async updateTutor(id: number, tutor: TutorDto) {
        
        return await TutorRepository.updateTutor(id, tutor);
    }

    public static async deletarTutor(id: number) {
        return await TutorRepository.deleteTutor(id);
    }
}