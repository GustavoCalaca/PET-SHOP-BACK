import { ProdutoRepository } from "../../repository/Produto/produtoRepository";
import { ProdutoDto } from "../../controller/Produto/Dto/ProdutoDto";

export class ProdutoService {

  static async addProduto(produto: ProdutoDto): Promise<ProdutoDto> {
  try {
    if (!produto.nome || produto.nome.trim() === '') {
      throw new Error('O campo "nome" é obrigatório.');
    }

    if (!produto.descricao || produto.descricao.trim() === '') {
      throw new Error('O campo "descricao" é obrigatório.');
    }

    if (produto.preco === undefined || produto.preco === null || isNaN(produto.preco)) {
      throw new Error('O campo "preco" é obrigatório e deve ser um número válido.');
    }

    console.log('Produto cadastrado:', produto);
    await ProdutoRepository.add(produto);
    return produto;
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    throw error;
  }
}


  static async listarProduto(): Promise<ProdutoDto[]> {
    try {
      const produto = await ProdutoRepository.listar();
      console.log('Lista de produto:', produto);
      return produto;
    } catch (error) {
      console.error('Erro ao listar produto:', error);
      throw error;
    }
  }

  static async alterarProduto(id: number, dadosAtualizados: Partial<ProdutoDto>): Promise<ProdutoDto | null> {
  try {
    if ('nome' in dadosAtualizados && (!dadosAtualizados.nome || dadosAtualizados.nome.trim() === '')) {
      throw new Error('O campo "nome" não pode ser vazio.');
    }

    if ('descricao' in dadosAtualizados && (!dadosAtualizados.descricao || dadosAtualizados.descricao.trim() === '')) {
      throw new Error('O campo "descricao" não pode ser vazio.');
    }

    if ('preco' in dadosAtualizados && (dadosAtualizados.preco === undefined || dadosAtualizados.preco === null || isNaN(dadosAtualizados.preco))) {
      throw new Error('O campo "preco" não pode ser vazio e deve ser um número válido.');
    }

    const produtoAtualizado = await ProdutoRepository.alterar(id, dadosAtualizados);
    console.log('Produto atualizado:', produtoAtualizado);
    return produtoAtualizado;
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
}


  static async deletarProduto(id: number): Promise<void> {
    try {
      const sucesso = await ProdutoRepository.deletar(id);
      console.log(`Produto com ID ${id} deletado:`, sucesso);
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      throw error;
    }
  }
}
