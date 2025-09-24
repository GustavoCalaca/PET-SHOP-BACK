import { EnderecoTutorDto} from './EnderecoTutorDto';
import { ContatoTutoDto } from './ContatoTutoDto';
import { PetTutorDto } from './PetTutorDto';

export interface TutorDto {
    nome: string;
    cpf: string;
    idade: string;
    rg: string;
    genero: string;
    data_nascimento: Date;
    endereco: EnderecoTutorDto;
    contatos: ContatoTutoDto[];
    pet: PetTutorDto;
}
