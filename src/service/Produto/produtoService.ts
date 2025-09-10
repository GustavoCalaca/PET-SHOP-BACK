import { ProdutoRepository } from "../../repository/Produto/produtoRepository";
import { ProdutoDTO } from "../../controller/Produto/Dto/Dtoproduto";

export class ProdutoService {

  static async cadastrarProduto(produto: ProdutoDTO): Promise<ProdutoDTO> {
    try {
      console.log('Produto cadastrado:', produto);
      await ProdutoRepository.salvar(produto);
      return produto;
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      throw error;
    }
  }

  static async listarProdutos(): Promise<ProdutoDTO[]> {
    try {
      const produtos = await ProdutoRepository.listar();
      console.log('Lista de produtos:', produtos);
      return produtos;
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      throw error;
    }
  }

  static async atualizarProduto(id: number, dadosAtualizados: Partial<ProdutoDTO>): Promise<ProdutoDTO | null> {
    try {
      const produtoAtualizado = await ProdutoRepository.atualizar(id, dadosAtualizados);
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
