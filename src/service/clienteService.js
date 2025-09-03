import { Cliente } from "../controller/Dto/Cliente";
import { ClienteRepository } from "../repository/clienteRepository";


export class ClienteService {
  static cadastrarCliente(cliente: Cliente) {
    // Aqui você pode adicionar lógica para salvar o cliente em um banco de dados ou array
    // Exemplo: salvar em um array temporário ou logar no console
    console.log('Cliente cadastrado:', cliente);
    ClienteRepository.salvar(cliente);
    return cliente;
  }
}
