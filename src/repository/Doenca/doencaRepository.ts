import { query } from "../../config/database";
import { DoencaDto } from "../../controller/dto/DoencaDto";
import { PetDoencaDto } from "../../controller/dto/PetDoencaDto";

export class DoencaRepository {
  async getAll(): Promise<any[]> {
    const result = await query(`
      SELECT d.*, 
             COALESCE(json_agg(pd.*) FILTER (WHERE pd.iddoenca IS NOT NULL), '[]') AS pets
      FROM doenca d
      LEFT JOIN pet_doenca pd ON d.iddoenca = pd.iddoenca
      GROUP BY d.iddoenca
      ORDER BY d.iddoenca DESC
    `);

    return result.rows.map((row: any) => ({
      ...new DoencaDto(row),
      pets: row.pets.map((p: any) => new PetDoencaDto(p))
    }));
  }

  async getById(id: number): Promise<any | null> {
    const result = await query(`
      SELECT d.*, 
             COALESCE(json_agg(pd.*) FILTER (WHERE pd.iddoenca IS NOT NULL), '[]') AS pets
      FROM doenca d
      LEFT JOIN pet_doenca pd ON d.iddoenca = pd.iddoenca
      WHERE d.iddoenca = $1
      GROUP BY d.iddoenca
    `, [id]);

    if (result.rows.length === 0) return null;

    const row = result.rows[0];
    return {
      ...new DoencaDto(row),
      pets: row.pets.map((p: any) => new PetDoencaDto(p))
    };
  }

  async create(
    data: Omit<DoencaDto, "id" | "created_at" | "updated_at">
  ): Promise<any | null> {
    const result = await query(
      `INSERT INTO doenca (nome, descricao, ativo, idpetshop, created_at)
       VALUES ($1,$2,$3,$4,$5)
       RETURNING *`,
      [
        data.nome,
        data.descricao || null,
        data.ativo ?? true,
        data.idpetshop,
        new Date(),
      ]
    );

    const row = result.rows[0];
    return {
      ...new DoencaDto(row),
      pets: [] 
    };
  }

  async update(
    id: number,
    data: Omit<DoencaDto, "id" | "created_at">
  ): Promise<any | null> {
    const result = await query(
      `UPDATE doenca SET
        nome = $1,
        descricao = $2,
        ativo = $3,
        idpetshop = $4,
        updated_at = $5
      WHERE iddoenca = $6
      RETURNING *`,
      [
        data.nome,
        data.descricao,
        data.ativo,
        data.idpetshop,
        new Date(),
        id,
      ]
    );

    if (result.rows.length === 0) return null;

    const row = result.rows[0];
    
    const petsResult = await query(
      `SELECT pd.* FROM pet_doenca pd WHERE pd.iddoenca = $1`,
      [id]
    );

    return {
      ...new DoencaDto(row),
      pets: petsResult.rows.map((p: any) => new PetDoencaDto(p))
    };
  }

  async delete(id: number): Promise<boolean> {
    await query("DELETE FROM pet_doenca WHERE iddoenca = $1", [id]);
    const result = await query("DELETE FROM doenca WHERE iddoenca = $1", [id]);
    return result.rowCount ? result.rowCount > 0 : false;
  }
}
