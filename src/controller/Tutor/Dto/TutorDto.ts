import { EnderecoTutorDto} from './EnderecoTutorDto';
import { ContatoTutoDto } from './ContatoTutorDto';
import { PetTutorDto } from './PetTutorDto';

export interface TutorDto {
    nome: string;
    cpf: string;
    idade: string;
    rg: string;
    genero: string;
    dataNascimento: Date;
    endereco: EnderecoTutorDto;
    contatos: ContatoTutoDto[];
    pet: PetTutorDto[];
}
