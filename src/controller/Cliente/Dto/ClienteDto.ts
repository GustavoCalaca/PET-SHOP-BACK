import { ContatoDto } from "./ContatoClienteDto";
import { EnderecoDto } from "./EnderecoClienteDto";

export interface ClienteDto {
  nome: string;
  idade: number;
  cpf: string;
  rg: string; 
  genero: string;
  login: string;
  senha: string;
  email: string;
  endereco: EnderecoDto;
  contato: ContatoDto[];
}
