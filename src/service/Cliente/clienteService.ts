import { ClienteDto } from "../../controller/Cliente/Dto/ClienteDto";
import { ClienteRepository } from "../../repository/Cliente/clienteRepository";


export class ClienteService {

  static cadastrarCliente(cliente: ClienteDto) {

    console.log('Cliente cadastrado:', cliente);
    ClienteRepository.salvar(cliente);
    return cliente;
  }


  static listarClientes() {


    return 

  }



}
