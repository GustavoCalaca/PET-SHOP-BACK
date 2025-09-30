import { ContatoDto } from "./ContatoUsuarioDto";
import { EnderecoDto } from "./EndereçoUsuarioDto";

/**
 * Transformar o objeto Contato em lista de contato
 */

export interface UsuarioDto {
  id: number;
  nome: string;
  idade: number;
  dataAniversario: string;
  cpf: string;
  cnpj: string;
  ativo: boolean;
  email: string;
  login: string;
  senha: string;
  endereço: EnderecoDto
  contato: ContatoDto
}

