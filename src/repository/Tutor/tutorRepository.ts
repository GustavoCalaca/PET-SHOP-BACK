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
                tutor.nome, tutor.cpf, tutor.idade, tutor.rg, tutor.genero, tutor.dataNascimento,
            ]);
            const tutorId = result.rows[0].id;

            const insertEndereco= 'INSERT INTO Endereco_tutor (logradouro, numero, bairro, cidade, cep, complemento, idtutor) VALUES ($1, $2, $3, $4, $5, $6, $7)';
            
            await client.query(insertEndereco, [
                tutor.endereco.logradouro, tutor.endereco.numero, tutor.endereco.bairro, tutor.endereco.cidade, tutor.endereco.cep, tutor.endereco.complemento, tutorId,
            ]);

            const insertContato = 'INSERT INTO Contato_tutor (nome, telefone, email, idtutor) VALUES ($1, $2, $3, $4)';
            for(const contato of tutor.contatos) {
                await client.query(insertContato, [contato.nome, contato.telefone, contato.email, tutorId]);
            };

            const insertPet = 'INSERT INTO Pet (nome, raca, peso, idade, porte, genero, tipo, idtutor) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
            for(const pet of tutor.pet){
            await client.query(insertPet,[
                pet.nome, pet.raca, pet.peso, pet.idade, pet.porte, pet.genero, pet.tipo, pet.idtutor
            ])
        };
            
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

        public static async updateTutor(id: number, tutor: TutorDto): Promise<void> {
            const client = await pool.connect();
            try{
                const updateTutor = 'UPDATE tutor SET nome = $1, cpf = $2, idade = $3, rg = $4, genero = $5, data_nascimento = $6 WHERE id = $7';
                await client.query(updateTutor, [
                    tutor.nome, tutor.cpf, tutor.idade, tutor.rg, tutor.genero, tutor.dataNascimento, id ]);
                console.log('Tutor atualizado com sucesso!');
            } catch (error) {
                console.error('Erro ao atualizar tutor:', error);
                throw error;
            } finally {
                client.release();
            }
        }

        public static async deleteTutor(id: number): Promise<void> {
            const client = await pool.connect();
            try{
                const query = 'DELETE FROM tutor WHERE id = $1';
                await client.query(query, [id]);
                console.log('Tutor deletado com sucesso!');
            } catch (error) {
                console.error('Erro ao deletar tutor:', error);
                throw error;
            } finally {
                client.release();
            }
        }

        
    }
