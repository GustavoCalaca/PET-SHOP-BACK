import { DoencaRepository } from "../../repository/Doenca/doencaRepository";
import { DoencaDTO } from "../../controller/Doenca/Dto/DoencaDto";

export class DoencaService {
  static alterar(id: number, dados: any) {
    throw new Error('Method not implemented.');
  }



static async cadastrarDoenca(doenca: DoencaDTO): Promise<DoencaDTO> {
  try {
    if (!doenca.nome || doenca.nome.trim() === '') {
      throw new Error('O campo "nome" é obrigatório.');
    }

    if (!doenca.caracteristicas || doenca.caracteristicas.trim() === '') {
      throw new Error('O campo "caracteristica" é obrigatório.');
    }

    console.log('Doença cadastrada:', doenca);
    await DoencaRepository.salvar(doenca);
    return doenca;
  } catch (error) {
    console.error('Erro ao cadastrar doença:', error);
    throw error;
  }
}



  static async listarDoenca(): Promise<DoencaDTO[]> {
    try {
      const doenca = await DoencaRepository.listar();
      console.log('Lista de doença:', doenca);
      return doenca;
    } catch (error) {
      console.error('Erro ao listar doença:', error);
      throw error;
    }
  }

  static async alterarDoenca(id: number, dadosAtualizados: Partial<DoencaDTO>): Promise<DoencaDTO | null> {
  try {
    if ('nome' in dadosAtualizados && (!dadosAtualizados.nome || dadosAtualizados.nome.trim() === '')) {
      throw new Error('O campo "nome" não pode ser vazio.');
    }

    if ('caracteristicas' in dadosAtualizados && (!dadosAtualizados.caracteristicas || dadosAtualizados.caracteristicas.trim() === '')) {
      throw new Error('O campo "caracteristicas" não pode ser vazio.');
    }

    const doencaAlterar = await DoencaRepository.alterar(id, dadosAtualizados);
    console.log('Doença atualizada:', doencaAlterar);
    return doencaAlterar;
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
