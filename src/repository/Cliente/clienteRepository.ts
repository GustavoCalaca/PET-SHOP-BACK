import { Pool } from 'pg';
import { ClienteDto } from '../../controller/Cliente/Dto/ClienteDto';
import { dbConfig } from '../../config/config';

const pool = new Pool(dbConfig);

export class ClienteRepository {

  static async salvar(cliente: ClienteDto): Promise<void> {
    //Salvando cliente 
    const query = 'INSERT INTO clientes (nome, idade, cpf) VALUES ($1, $2, $3) RETURNING id';
    const values = [cliente.nome, cliente.idade, cliente.cpf];
    const result = await pool.query(query, values);
    const idCliente = result.rows[0].id;

    console.log('Cliente salvo com sucesso:', cliente.nome);

    // Salvando endereco
    const qualquerNome = `INSERT INTO endereco_cliente (logradouro, numero, bairro, cidade, complemento, estado, idcliente)
                          VALUES($1, $2, $3, $4, $5, $6, $7)`;
    const vlEndereco = [
      cliente.endereco.logradouro,
      cliente.endereco.numero,
      cliente.endereco.bairro,
      cliente.endereco.cidade,
      cliente.endereco.complemeto,
      cliente.endereco.estado,
      idCliente
    ];
    
    await pool.query(qualquerNome, vlEndereco);

    console.log('Endereço salvo com sucesso:', cliente.endereco);


    for (const contato of cliente.contato) {
      const queryContato = `INSERT INTO contato_cliente (nome, telefone, email, idcliente)
                            VALUES($1, $2, $3, $4)`;
      const vlContato = [contato.nome, contato.telefone, contato.email, idCliente];
      await pool.query(queryContato, vlContato);
    }

    
    console.log('Cliente salvo com sucesso:', cliente);

  }


  static async listarCliente(): Promise<void>{
    const query = 'SELECT * FROM clientes';
    await pool.query(query);
  }

}
