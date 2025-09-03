import { Pool } from 'pg';
import { DoencaDto } from '../../controller/Doenca/Dto/DoencaDto';
import { dbConfig } from '../../config/config';

const pool = new Pool(dbConfig);

export class DoencaRepository {

 
  static async salvar(doenca: DoencaDto): Promise<void> {
    const query = `
      INSERT INTO doencas (nome, caracteristica)
      VALUES ($1, $2) RETURNING id
    `;
    const values = [
      doenca.nome,
      doenca.caracteristica
      
    ];
    const result = await pool.query(query, values);
    const idDoenca = result.rows[0].id;

    console.log('Doença salva com sucesso:', doenca.nome);
  }

 
  static async listar(): Promise<DoencaDto[]> {
    const query = 'SELECT * FROM doencas';
    const result = await pool.query(query);
    return result.rows;
  }

 
  static async atualizar(id: string, dadosAtualizados: Partial<DoencaDto>): Promise<DoencaDto | null> {
    const query = `
      UPDATE doencas
      SET nome = $1, caracteristica = $2
      WHERE id = $3 RETURNING *
    `;
    const values = [
      dadosAtualizados.nome,
      dadosAtualizados.caracteristica
  
      id
    ];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }


  static async deletar(id: string): Promise<boolean> {
    const result = await pool.query('DELETE FROM doencas WHERE id = $1', [id]);
    return result.rowCount > 0;
  }
}
