import { Pool } from 'pg';
import { dbConfig } from '../../config/config';
import { ServicoDto } from '../../controller/Servico/Dto/Dtoservico';

const pool = new Pool(dbConfig);

export class ServicoRepository {


  static async salvar(servico: ServicoDto): Promise<void> {
    const query = `
      INSERT INTO servicos (nome, descricao, preco, duracao)
      VALUES ($1, $2, $3, $4) RETURNING id
    `;
    const values = [
      servico.nome,
      servico.descricao,
      servico.preco,
      servico.duracao
    ];
    const result = await pool.query(query, values);
    const idServico = result.rows[0].id;

    console.log('Serviço salvo com sucesso:', servico.nome);
  }


  static async listar(): Promise<ServicoDto[]> {
    const query = 'SELECT * FROM servicos';
    const result = await pool.query(query);
    return result.rows;
  }


  static async atualizar(id: string, dadosAtualizados: Partial<ServicoDto>): Promise<ServicoDto | null> {
    const query = `
      UPDATE servicos
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

 
  static async deletar(id: string): Promise<boolean> {
    const result = await pool.query('DELETE FROM servicos WHERE id = $1', [id]);
    return result.rowCount > 0;
  }
}
