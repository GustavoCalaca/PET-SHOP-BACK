import { Pool } from 'pg';
import { dbConfig } from '../../config/config';
import { ServicoDto } from '../../controller/Servico/Dto/ServicoDto';

const pool = new Pool(dbConfig);

export class ServicoRepository {

  static async salvar(servico: ServicoDto): Promise<ServicoDto> {
  const query = `
    INSERT INTO servico (nome, descricao, preco, duracao)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  const values = [
    servico.nome,
    servico.descricao,
    servico.preco,
    servico.duracao
  ];

  const result = await pool.query(query, values);
  return result.rows[0]; 
}



  static async listar(): Promise<ServicoDto[]> {
    const query = 'SELECT * FROM servico';
    const result = await pool.query(query);
    return result.rows;
  }

  static async atualizar(id: number, dadosAtualizados: Partial<ServicoDto>): Promise<ServicoDto | null> {
    const query = `
      UPDATE servico
      SET nome = $1, descricao = $2, preco = $3, duracao = $4
      WHERE id = $5 RETURNING *
    `;
    const values = [
      dadosAtualizados.nome,
      dadosAtualizados.descricao,
      dadosAtualizados.preco,
      dadosAtualizados.duracao,
      id
    ];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async deletar(id: number): Promise<void> {
    await pool.query('DELETE FROM servico WHERE id = $1', [id]);
    console.log(`Serviço com ID ${id} deletado.`);
  }
}
