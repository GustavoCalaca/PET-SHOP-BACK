import { TutorDto} from '../../controller/Tutor/Dto/TutorDto';
import { TutorRepository} from '../../repository/Tutor/tutorRepository';

export class tutorService {
    public static async addTutor(tutor: TutorDto) {
        if (!tutor.nome || !tutor.dataNascimento || !tutor.idade || !tutor.genero) {
            throw new Error('Preencha todos os campos pendentes do tutor');
        }

        if (!tutor.rg){
            throw new Error('Preencha o RG')
        } else if (!this.validarRG(tutor.rg)) {
            throw new Error('RG invalido')}
            
        if (!tutor.cpf ){
            throw new Error('Preencha o CPF')
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

    private static validarRG(rg:string):boolean {
        // Exemplo simplificado: um RG com 7 ou 8 dígitos e opcionalmente um 'X' ou 'x' no final
        // Esta é uma validação muito básica, pois cada estado tem um formato diferente.
        const regex = /^\d{7,8}[0-9Xx]?$/;
        return regex.test(rg);
      }
}

