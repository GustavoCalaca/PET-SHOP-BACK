import { EnderecoTutorDto} from './EnderecoTutorDto';
import { ContatoTutoDto } from './ContatoTutoDto';

export interface TutorDto {
    nome: string;
    cpf: string;
    rg: string;
    genero: string;
    dataNascimento: Date;
    email: string;
    telefone: string;
    endereco: EnderecoTutorDto;
    contatos: ContatoTutoDto[];

}
