import { DoencaRepository } from "../../repository/Doenca/doencaRepository";
import { DoencaDTO } from "../../controller/Doenca/Dto/Dtodoenca";

export class DoencaService {

  static async cadastrarDoenca(doenca: DoencaDTO): Promise<DoencaDTO> {
    try {
      console.log('Doença cadastrada:', doenca);
      await DoencaRepository.salvar(doenca);
      return doenca;
    } catch (error) {
      console.error('Erro ao cadastrar doença:', error);
      throw error;
    }
  }

  static async listarDoencas(): Promise<DoencaDTO[]> {
    try {
      const doencas = await DoencaRepository.listar();
      console.log('Lista de doenças:', doencas);
      return doencas;
    } catch (error) {
      console.error('Erro ao listar doenças:', error);
      throw error;
    }
  }

  static async atualizarDoenca(id: number, dadosAtualizados: Partial<DoencaDTO>): Promise<DoencaDTO | null> {
    try {
      const doencaAtualizada = await DoencaRepository.atualizar(id, dadosAtualizados);
      console.log('Doença atualizada:', doencaAtualizada);
      return doencaAtualizada;
    } catch (error) {
      console.error('Erro ao atualizar doença:', error);
      throw error;
    }
  }

  static async deletarDoenca(id: number): Promise<void> {
    try {
      const sucesso = await DoencaRepository.deletar(id);
      console.log(`Doença com ID ${id} deletada:`, sucesso);
    } catch (error) {
      console.error(`Erro ao deletar doença com ID ${id}:`, error);
      throw error;
    }
  }
}
