import { Pool } from 'pg';
import { ProdutoDto } from '../../controller/Produto/Dto/ProdutoDto';
import { dbConfig } from '../../config/config';

const pool = new Pool(dbConfig);

export class ProdutoRepository {

  
  static async salvar(produto: ProdutoDto): Promise<void> {
    const query = `
      INSERT INTO produtos (nome, descricao, preco)
      VALUES ($1, $2, $3) RETURNING id
    `;
    const values = [
      produto.nome,
      produto.descricao,
      produto.preco,
      
    ];
    const result = await pool.query(query, values);
    const idProduto = result.rows[0].id;

    console.log('Produto salvo com sucesso:', produto.nome);
  }

  
  static async listar(): Promise<ProdutoDto[]> {
    const query = 'SELECT * FROM produtos';
    const result = await pool.query(query);
    return result.rows;
  }

  
  static async atualizar(id: string, dadosAtualizados: Partial<ProdutoDto>): Promise<ProdutoDto | null> {
    const query = `
      UPDATE produtos
      SET nome = $1, descricao = $2, preco = $3
      WHERE id = $4 RETURNING *
    `;
    const values = [
      dadosAtualizados.nome,
      dadosAtualizados.descricao,
      dadosAtualizados.preco,
      id
    ];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  
  static async deletar(id: string): Promise<boolean> {
    const result = await pool.query('DELETE FROM produtos WHERE id = $1', [id]);
    return result.rowCount > 0;
  }
}
