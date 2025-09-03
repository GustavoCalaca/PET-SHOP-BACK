import { ServicoDto } from "../../controller/Servico/Dto/ServicoDto";
import { ServicoRepository } from "../../repository/Servico/servicoRepository";

export class ServicoService {

  static cadastrarServico(servico: ServicoDto) {
    console.log('Serviço cadastrado:', servico);
    ServicoRepository.salvar(servico);
    return servico;
  }

  static listarServicos(): ServicoDto[] {
    const servicos = ServicoRepository.listarTodos();
    console.log('Lista de serviços:', servicos);
    return servicos;
  }

  static atualizarServico(id: string, dadosAtualizados: Partial<ServicoDto>): ServicoDto | null {
    const servicoAtualizado = ServicoRepository.atualizar(id, dadosAtualizados);
    console.log('Serviço atualizado:', servicoAtualizado);
    return servicoAtualizado;
  }

  static deletarServico(id: string): boolean {
    const sucesso = ServicoRepository.deletar(id);
    console.log(`Serviço com ID ${id} deletado:`, sucesso);
    return sucesso;
  }
}
