import { ServicoRepository } from "../../repository/Servico/servicoRepository";
import { ServicoDTO } from "../../controller/Servico/Dto/Dtoservico";

export class ServicoService {

  static async cadastrarServico(servico: ServicoDTO): Promise<ServicoDTO> {
    try {
      console.log('Serviço cadastrado:', servico);
      await ServicoRepository.salvar(servico);
      return servico;
    } catch (error) {
      console.error('Erro ao cadastrar serviço:', error);
      throw error;
    }
  }

  static async listarServicos(): Promise<ServicoDTO[]> {
    try {
      const servicos = await ServicoRepository.listar();
      console.log('Lista de serviços:', servicos);
      return servicos;
    } catch (error) {
      console.error('Erro ao listar serviços:', error);
      throw error;
    }
  }

  static async atualizarServico(id: number, dadosAtualizados: Partial<ServicoDTO>): Promise<ServicoDTO | null> {
    try {
      const servicoAtualizado = await ServicoRepository.atualizar(id, dadosAtualizados);
      console.log('Serviço atualizado:', servicoAtualizado);
      return servicoAtualizado;
    } catch (error) {
      console.error('Erro ao atualizar serviço:', error);
      throw error;
    }
  }

  static async deletarServico(id: number): Promise<void> {
    try {
      const sucesso = await ServicoRepository.deletar(id);
      console.log(`Serviço com ID ${id} deletado:`, sucesso);
    } catch (error) {
      console.error('Erro ao deletar serviço:', error);
      throw error;
    }
  }
}
