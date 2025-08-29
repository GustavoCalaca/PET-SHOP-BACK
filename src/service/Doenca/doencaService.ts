import { DoencaDto } from "../../controller/Doenca/Dto/DoencaDto";
import { DoencaRepository } from "../../repository/Doenca/doencaRepository";

export class DoencaService {

  static cadastrarDoenca(doenca: DoencaDto) {
    console.log('Doença cadastrada:', doenca);
    DoencaRepository.salvar(doenca);
    return doenca;
  }

  static listarDoencas(): DoencaDto[] {
    const doencas = DoencaRepository.listarTodos();
    console.log('Lista de doenças:', doencas);
    return doencas;
  }

  static atualizarDoenca(id: string, dadosAtualizados: Partial<DoencaDto>): DoencaDto | null {
    const doencaAtualizada = DoencaRepository.atualizar(id, dadosAtualizados);
    console.log('Doença atualizada:', doencaAtualizada);
    return doencaAtualizada;
  }

  static deletarDoenca(id: string): boolean {
    const sucesso = DoencaRepository.deletar(id);
    console.log(`Doença com ID ${id} deletada:`, sucesso);
    return sucesso;
  }
}
