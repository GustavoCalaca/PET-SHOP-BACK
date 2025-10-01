import { Pool } from "pg";
import { dbConfig } from "../../config/config";
import { UsuarioDto } from "../../controller/Usuario/Dto/UsuarioDto";

const pool = new Pool(dbConfig);

export class UsuarioRepository {

  /**
   * Pendencias para @William
   * 1 - Criar o salvar neste método os dados de endereço e contato
   */

  static async salvar(usuario: UsuarioDto) {
    const query = `
      INSERT INTO usuario (nome, idade, data_aniversario, cpf, cnpj, ativo, email, login, senha)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING id
    `;
    const values = [
      usuario.nome,
      usuario.idade ?? null,
      usuario.dataAniversario ?? null,
      usuario.cpf ?? null,
      usuario.cnpj ?? null,
      usuario.ativo ?? true,
      usuario.email ?? null,
      usuario.login,
      usuario.senha
    ];
    const result = await pool.query(query, values);
    return result.rows[0].id;
  }

  static async listar() {
    const result = await pool.query("SELECT * FROM usuario");
    return result.rows;
  }

  /**
   * 
   * Criar o atualizar de contato e endereço
   */
  static async atualizar(id: number, dados: Partial<UsuarioDto>) {
    const entries = Object.entries(dados).filter(([, valor]) => valor !== undefined);
    const campos = entries.map(([chave], i) => `${chave} = $${i + 1}`);
    const valores = entries.map(([, valor]) => valor);

    const query = `
      UPDATE usuario
      SET ${campos.join(", ")}
      WHERE id = $${entries.length + 1}
      RETURNING *
    `;

    const result = await pool.query(query, [...valores, id]);
    return result.rows[0] || null;
  }

  /**
   * 
   * Criar os deletes de contato e endereço
   */
  static async deletar(id: number): Promise<void> {
    await pool.query("DELETE FROM usuario WHERE id = $1", [id]);
    console.log(`Usuário com ID ${id} deletado.`);
  }
}
