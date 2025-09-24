import { ServicoDto } from "../../controller/Servico/Dto/ServicoDto";
import { ServicoRepository } from "../../repository/Servico/servicoRepository";



export class ServicoService {

  static async cadastrarServico(servico: ServicoDto): Promise<ServicoDto> {
  try {
    const novoServico = await ServicoRepository.salvar(servico);
    console.log('Serviço cadastrado com sucesso:', novoServico);
    return novoServico;
  } catch (error) {
    console.error('Erro ao cadastrar serviço:', error);
    throw error;
  }
}


  static async listarServico(): Promise<ServicoDto[]> {
    try {
      const servico = await ServicoRepository.listar();
      console.log('Lista de serviço:', servico);
      return servico;
    } catch (error) {
      console.error('Erro ao listar serviço:', error);
      throw error;
    }
  }

  static async atualizarServico(id: number, dadosAtualizados: Partial<ServicoDto>): Promise<ServicoDto | null> {
    try {
      const servicoAtualizado = await ServicoRepository.atualizar(id, dadosAtualizados);
      console.log('Serviço atualizado:', servicoAtualizado);
      return servicoAtualizado;
    } catch (error) {
      console.error('Erro ao atualizar servico:', error);
      throw error;
    }
  }

  static async deletarServico(id: number): Promise<void> {
    try {
      const sucesso = await ServicoRepository.deletar(id);
      console.log(`Servico com ID ${id} deletado:`, sucesso);
    } catch (error) {
      console.error('Erro ao deletar servico:', error);
      throw error;
    }
  }
}
