import { Pool } from 'pg';
import { dbConfig } from '../../config/config';
import { DoencaDTO } from '../../controller/Doenca/Dto/Dtodoenca';

const pool = new Pool(dbConfig);

export class DoencaRepository {

 
  static async salvar(doenca: DoencaDTO): Promise<void> {
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

 
  static async listar(): Promise<DoencaDTO[]> {
    const query = 'SELECT * FROM doencas';
    const result = await pool.query(query);
    return result.rows;
  }

 
  static async atualizar(id: number, dadosAtualizados: Partial<DoencaDTO>): Promise<DoencaDTO | null> {
    const query = `
      UPDATE doencas
      SET nome = $1, caracteristica = $2
      WHERE id = $3 RETURNING *
    `;
    const values = [
      dadosAtualizados.nome,
      dadosAtualizados.caracteristica,
  
      id
    ];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }


  static async deletar(id: number): Promise<void> {
    const result = await pool.query('DELETE FROM doencas WHERE id = $1', [id]);
    
  }
}
