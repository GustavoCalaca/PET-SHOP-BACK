import { EnderecoTutorDto} from './EnderecoTutorDto';
import { ContatoTutoDto } from './ContatoTutoDto';

export interface TutorDto {
    nome: string;
    cpf: string;
    idade: string;
    rg: string;
    genero: string;
    data_nascimento: Date;
    endereco: EnderecoTutorDto;
    contatos: ContatoTutoDto[];

}
