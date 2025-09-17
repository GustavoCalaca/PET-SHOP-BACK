import { ProdutoRepository } from "../../repository/Produto/produtoRepository";
import { ProdutoDto } from "../../controller/Produto/Dto/ProdutoDto";

export class ProdutoService {

  static async addProduto(produto: ProdutoDto): Promise<ProdutoDto> {
    try {
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
      const produtos = await ProdutoRepository.listar();
      console.log('Lista de produto:', produtos);
      return produtos;
    } catch (error) {
      console.error('Erro ao listar produto:', error);
      throw error;
    }
  }

  static async alterarProduto(id: number, dadosAtualizados: Partial<ProdutoDto>): Promise<ProdutoDto | null> {
    try {
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
