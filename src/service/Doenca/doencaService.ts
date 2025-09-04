import { promises } from "dns";
import { DoencaRepository } from "../../repository/Doenca/doencaRepository";
import { DoencaDTO } from "../../controller/Doenca/Dto/Dtodoenca";

export class DoencaService {

  static cadastrarDoenca(doenca: DoencaDTO) {
    console.log('Doença cadastrada:', doenca);
    DoencaRepository.salvar(doenca);
    return doenca;
  }

  static async listarDoencas(): Promise<DoencaDTO[]> {
    const doencas = await DoencaRepository.listar();
    console.log('Lista de doenças:', doencas);
    return doencas;
  }

  static async atualizarDoenca(id: number, dadosAtualizados: Partial<DoencaDTO>): Promise<DoencaDTO | null> {
    const doencaAtualizada = await DoencaRepository.atualizar(id, dadosAtualizados);
    console.log('Doença atualizada:', doencaAtualizada);
    return doencaAtualizada;
  }

  static async deletarDoenca(id: number): Promise<void> {
    const sucesso = await DoencaRepository.deletar(id);
    console.log(`Doença com ID ${id} deletada:`, sucesso)
  
  }
}
