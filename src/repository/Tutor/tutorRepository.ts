import {Pool} from 'pg';
import { TutorDto } from '../../controller/Tutor/Dto/TutorDto';
import { dbConfig } from '../../config/config';

const pool = new Pool(dbConfig);

export class TutorRepository {
    public static async salvar(tutor: TutorDto): Promise<void> {
        const client = await pool.connect();
        try{
            await client.query('BEGIN');

            const addTutor = 'INSERT INTO tutor (nome, cpf, rg, genero, data_nascimento, email, telefone) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id';

            const result = await client.query(addTutor,[
                tutor.nome, tutor.cpf, tutor.rg, tutor.genero, tutor.dataNascimento, tutor.email, tutor.telefone,
            ]);
            const tutorId = result.rows[0].id;

            const insertEndereco= 'INSERT INTO endereco_tutor (logradouro, numero, bairro, cidade, estado, cep, complemento, tutor_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
            
            await client.query(insertEndereco, [
                tutor.endereco.logradouro, tutor.endereco.numero, tutor.endereco.bairro, tutor.endereco.cidade, tutor.endereco.estado, tutor.endereco.cep, tutor.endereco.complemento, tutorId,
            ]);

            const insertContato = 'INSERT INTO contato_tutor (nome, telefone, tutorId) VALUES ($1, $2, $3)';
            for(const contato of tutor.contatos) {
                await client.query(insertContato, [contato.nome, contato.telefone, tutorId]);
            }

            await client.query('COMMIT');
            console.log('Tutor salvo com sucesso!');
        } catch (error) {
            await client.query('ROLLBACK');
            console.error('Erro ao salvar tutor:', error);
            throw error;
        } finally {
            client.release();
        }
    }

        public async listar(): Promise<TutorDto[]> {
            const result = await pool.query('SELECT * FROM tutor');
            return result.rows;
        }

    
        
    }
