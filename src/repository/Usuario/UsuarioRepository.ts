import { Pool } from "pg";
import { dbConfig } from "../../config/config";
import { UsuarioDto } from "../../controller/Usuario/Dto/UsuarioDto";

const pool = new Pool(dbConfig);

export class UsuarioRepository {
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

  static async atualizar(id: number, dados: Partial<UsuarioDto>) {
    const query = `
      UPDATE usuario
      SET nome=$1, idade=$2, data_aniversario=$3, cpf=$4, cnpj=$5, ativo=$6,
          email=$7, login=$8, senha=$9
      WHERE id=$10
      RETURNING *
    `;
    const values = [
      dados.nome ?? null,
      dados.idade ?? null,
      dados.dataAniversario ?? null,
      dados.cpf ?? null,
      dados.cnpj ?? null,
      dados.ativo ?? true,
      dados.email ?? null,
      dados.login ?? null,
      dados.senha ?? null,
      id
    ];
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async deletar(id: number) {
    const result = await pool.query("DELETE FROM usuario WHERE id = $1", [id]);
    
  }
}
