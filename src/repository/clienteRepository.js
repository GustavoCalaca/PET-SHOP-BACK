const pool = require('../config');

class ClienteRepository {
  async addTutor(tutor) {
    const result = await pool.query(
      'INSERT INTO tutor (nome, cpf, genero, idade, rg) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [tutor.nome, tutor.cpf, tutor.genero, tutor.idade, tutor.rg]
    );

    const tutorid = result.rows[0].id;

    await pool.query(
      'INSERT INTO endereco_tutor (logradouro, cep, numero, bairro, cidade, complemento, pais,id_tutor VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',[
        tutor.endereco_tutor.logradouro,
        tutor.endereco_tutor.cep,
        tutor.endereco_tutor.numero,
        tutor.endereco_tutor.cidade,
        tutor.endereco_tutor.complemento,
        tutor.endereco_tutor.pais,
        tutorId
      ]
    );

    await pool.query(
      'INSERT INTO contato_tutor(nome, telefone, email, id_tutor) VALUES ($1, $2, $3, $4)', [
        tutor.contato_tutor.nome,
        tutor.contato_tutor.telefone,
        tutor.contato_tutor.email,
        tutorID
      ]
    );

    return {id: tutorID, ...tutor};
  };

  async listTutor() {
    const result = await pool.query('SELECET * FROM tutor');
    return result.rows;
  };

  async deleteTutor (id) {
     await pool.query('DELETE FROM endereco_tutor WHERE id_tutor = $1', [id]);
    await pool.query('DELETE FROM contato_tutor WHERE id_tutor = $1', [id]);
    const result = await pool.query('DELETE FROM tutor WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  };

  async addPet(tutorId, pet) {
    const result = await pool.query(
      'INSERT INTO pet (nome, especie, raca, idade, id_tutor) VALUES ($1, $2, $3, $4, $5) RETURNING id,'[
        pet.nome, pet.especie, pet.raca, pet.idade, pet.tutorId
      ]
    );

    const petID = result.rows[0].id;
    return{ id: petId, tutorId,...pet};
  }


};

module.exports = ClienteRepository;