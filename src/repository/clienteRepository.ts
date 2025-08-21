import { Pool } from 'pg';
import { Cliente } from '../controller/Dto/Cliente';
import { dbConfig } from '../config/config';

const pool = new Pool(dbConfig);

export class ClienteRepository {
  static async salvar(cliente: Cliente): Promise<void> {
    const query = 'INSERT INTO clientes (nome, idade, cpf) VALUES ($1, $2, $3)';
    const values = [cliente.nome, cliente.idade, cliente.cpf];
    await pool.query(query, values);
  }
}
