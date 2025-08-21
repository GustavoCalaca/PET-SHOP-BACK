import { Pool } from 'pg';
import { ClienteDto } from '../../controller/Cliente/Dto/ClienteDto';
import { dbConfig } from '../../config/config';

const pool = new Pool(dbConfig);

export class ClienteRepository {

  static async salvar(cliente: ClienteDto): Promise<void> {
    //Salvando cliente 
    const query = 'INSERT INTO clientes (nome, idade, cpf) VALUES ($1, $2, $3)';
    const values = [cliente.nome, cliente.idade, cliente.cpf];
    //Salvando e pegando o id do cliente 
    var idCliente = (await pool.query(query, values)).rows[0];

    //Salvando endereco
    const qualquerNome = `INSERT INTO endereco_cliente (logradouro, numero, bairro, cidade, complemento, estado, idcliente)
                          VALUES($1, $2, $3, $4, $5, $6, $7)`;
    const vlEndereco = [cliente.endereco.logradouro, cliente.endereco.numero, cliente.endereco.bairro, cliente.endereco.cidade, cliente.endereco.complemeto, cliente.endereco.estado, idCliente];
    await pool.query(qualquerNome, vlEndereco);

    //Percorrendo a lista de contato
    cliente.contato.forEach(async contato => {
        //Para cada contato vindo do postman salvar no banco
        const queryContato = `INSERT INTO contato_cliente (nome, telefone, email)
                              VALUES($1, $2, $3)`;
        const vlContato = [contato.nome, contato.telefone, contato.email];
        await pool.query(queryContato, vlContato);

    });




  }


  static async listarCliente(): Promise<void>{
    const query = 'SELECT * FROM clientes';
    await pool.query(query);
  }

}
