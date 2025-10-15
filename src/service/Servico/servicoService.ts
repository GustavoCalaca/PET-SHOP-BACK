import { ServicoDto } from "../../controller/Servico/Dto/ServicoDto";
import { ServicoRepository } from "../../repository/Servico/servicoRepository";



export class ServicoService {

  static async cadastrarServico(servico: ServicoDto): Promise<ServicoDto> {
  try {
    if (!servico.nome || servico.nome.trim() === '') {
      throw new Error('O campo "nome" é obrigatório.');
    }

    if (!servico.descricao || servico.descricao.trim() === '') {
      throw new Error('O campo "descricao" é obrigatório.');
    }

    if (servico.preco === undefined || servico.preco === null || isNaN(servico.preco)) {
      throw new Error('O campo "preco" é obrigatório e deve ser um número válido.');
    }

    if (servico.duracao === undefined || servico.duracao === null || isNaN(servico.duracao)) {
      throw new Error('O campo "duração" é obrigatório e deve ser um número válido.');
    }

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
    if ('nome' in dadosAtualizados && (!dadosAtualizados.nome || dadosAtualizados.nome.trim() === '')) {
      throw new Error('O campo "nome" não pode ser vazio.');
    }

    if ('descricao' in dadosAtualizados && (!dadosAtualizados.descricao || dadosAtualizados.descricao.trim() === '')) {
      throw new Error('O campo "descricao" não pode ser vazio.');
    }

    if ('preco' in dadosAtualizados && (
      dadosAtualizados.preco === undefined ||
      dadosAtualizados.preco === null ||
      isNaN(dadosAtualizados.preco)
    )) {
      throw new Error('O campo "preco" não pode ser vazio e deve ser um número válido.');
    }

    if ('duracao' in dadosAtualizados && (
      dadosAtualizados.duracao === undefined ||
      dadosAtualizados.duracao === null ||
      isNaN(dadosAtualizados.duracao)
    )) {
      throw new Error('O campo "duração" não pode ser vazio e deve ser um número válido.');
    }

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
      console.log(`Servico com ID ${id} deletado:`, sucesso);
    } catch (error) {
      console.error('Erro ao deletar servico:', error);
      throw error;
    }
  }
}
