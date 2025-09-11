import { Pool } from 'pg';
import { dbConfig } from '../../config/config';
import { DoencaDTO } from '../../controller/Doenca/Dto/DoencaDto';

const pool = new Pool(dbConfig);

export class DoencaRepository {

 
  static async salvar(doenca: DoencaDTO): Promise<void> { 
    
    const query = ` INSERT INTO doenca (nome, caracteristicas) VALUES ($1, $2) RETURNING id `;
     const values = [ doenca.nome, doenca.caracteristicas ]; 
     const result = await pool.query(query, values); 
     console.log('Doença salva com sucesso:', doenca.nome);
    
    }

 
  static async listar(): Promise<DoencaDTO[]> {
    const query = 'SELECT * FROM doenca';
    const result = await pool.query(query);
    return result.rows;
    
  }

 
  static async alterar(id: number, dadosAlterar: Partial<DoencaDTO>): Promise<DoencaDTO | null> {
  console.log('[DEBUG] Alterando doença ID:', id);
  console.log('[DEBUG] Dados recebidos:', dadosAlterar);

  const query = `
    UPDATE doenca
    SET nome = $1, caracteristicas = $2
    WHERE id = $3 RETURNING *
  `;
  const values = [dadosAlterar.nome, dadosAlterar.caracteristicas, id];

  try {
    const result = await pool.query(query, values);
    console.log('[SUCESSO] Doença alterada:', result.rows[0]);
    return result.rows[0] || null;
  } catch (error) {
    console.error('[ERRO] Falha ao alterar doença:', error);
    throw error;
  }
}


  static async deletar(id: number): Promise<void> {
  console.log(`[DEBUG] Tentando deletar doença com ID: ${id}`);

  try {
    const result = await pool.query('DELETE FROM doenca WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      console.warn(`[AVISO] Nenhuma doença encontrada com ID: ${id}`);
    } else {
      console.log(`[SUCESSO] Doença com ID ${id} deletada com sucesso.`);
    }
  } catch (error) {
    console.error(`[ERRO] Falha ao deletar doença com ID ${id}:`, error);
    throw error;
  }
}

}
