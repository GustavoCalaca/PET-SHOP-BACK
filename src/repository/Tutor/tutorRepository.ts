import {Pool} from 'pg';
import { TutorDto } from '../../controller/Tutor/Dto/TutorDto';
import { dbConfig } from '../../config/config';

const pool = new Pool(dbConfig);

export class TutorRepository {
    public static async addTutor(tutor: TutorDto): Promise<void> {
        const client = await pool.connect();
        try{

            const addTutor = 'INSERT INTO tutor (nome, cpf, idade, rg, genero, data_nascimento) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';

            const result = await client.query(addTutor,[
                tutor.nome, tutor.cpf, tutor.idade, tutor.rg, tutor.genero, tutor.data_nascimento,
            ]);
            const tutorId = result.rows[0].id;

            const insertEndereco= 'INSERT INTO Endereco_tutor (logradouro, numero, bairro, cidade, cep, complemento, idtutor) VALUES ($1, $2, $3, $4, $5, $6, $7)';
            
            await client.query(insertEndereco, [
                tutor.endereco.logradouro, tutor.endereco.numero, tutor.endereco.bairro, tutor.endereco.cidade, tutor.endereco.cep, tutor.endereco.complemento, tutorId,
            ]);

            const insertContato = 'INSERT INTO Contato_tutor (nome, telefone, email, idtutor) VALUES ($1, $2, $3, $4)';
            for(const contato of tutor.contatos) {
                await client.query(insertContato, [contato.nome, contato.telefone, contato.email, tutorId]);
            }
            
            console.log('Tutor salvo com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar tutor:', error);
            throw error;
        } finally {
            client.release();
        }
    }

        public static async listarTutor(): Promise<TutorDto[]> {
            const result = await pool.query('SELECT * FROM tutor');
            return result.rows;
        }

        
    }
