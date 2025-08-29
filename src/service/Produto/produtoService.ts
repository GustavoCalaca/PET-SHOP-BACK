import { ProdutoDto } from "../../controller/Produto/Dto/ProdutoDto";
import { ProdutoRepository } from "../../repository/Produto/produtoRepository";

export class ProdutoService {

  static cadastrarProduto(produto: ProdutoDto) {
    console.log('Produto cadastrado:', produto);
    ProdutoRepository.salvar(produto);
    return produto;
  }

  static listarProdutos(): ProdutoDto[] {
    const produtos = ProdutoRepository.listarTodos();
    console.log('Lista de produtos:', produtos);
    return produtos;
  }

  static atualizarProduto(id: string, dadosAtualizados: Partial<ProdutoDto>): ProdutoDto | null {
    const produtoAtualizado = ProdutoRepository.atualizar(id, dadosAtualizados);
    console.log('Produto atualizado:', produtoAtualizado);
    return produtoAtualizado;
  }

  static deletarProduto(id: string): boolean {
    const sucesso = ProdutoRepository.deletar(id);
    console.log(`Produto com ID ${id} deletado:`, sucesso);
    return sucesso;
  }
}
