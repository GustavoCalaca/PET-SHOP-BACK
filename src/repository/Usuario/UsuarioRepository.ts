import { pool } from "../database";
import { Usuario } from "../types";

export const salvarUsuario = async (usuario: Usuario) => {
  const query = `
    INSERT INTO usuario 
    (nome, idade, data_aniversario, cpf, cnpj, ativo, email, login, senha, logradouro, numero, cidade, bairro, pais, estado, contato)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
    RETURNING *;
  `;

  const values = [
    usuario.nome,
    usuario.idade,
    usuario.dataAniversario,
    usuario.cpf,
    usuario.cnpj,
    usuario.ativo,
    usuario.email,
    usuario.login,
    usuario.senha,
    usuario.endereco.logardouro,
    usuario.endereco.numero,
    usuario.endereco.cidade,
    usuario.endereco.bairro,
    usuario.endereco.pais,
    usuario.endereco.estado,
    JSON.stringify(usuario.contato)
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};
