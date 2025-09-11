import { Request, Response } from 'express';
import { ProdutoService } from '../../service/Produto/produtoService';



export class ProdutoController {

  public static async adicionarProduto(req: Request, res: Response) {
    try {
      const produto = req.body;
      const novoProduto = await ProdutoService.cadastrarProduto(produto);
      return res.status(201).json({ message: 'Produto cadastrado com sucesso!', produto: novoProduto });
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      return res.status(500).json({ message: 'Erro ao cadastrar produto.' });
    }
  }

  public static async listarProdutos(req: Request, res: Response) {
    try {
      const produtos = await ProdutoService.listarProdutos();
      return res.status(200).json(produtos);
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      return res.status(500).json({ message: 'Erro ao listar produtos.' });
    }
  }

  public static async atualizarProduto(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const dadosAtualizados = req.body;
      const produtoAtualizado = await ProdutoService.atualizarProduto(id ? parseInt(id) : 0, dadosAtualizados);
      return res.status(200).json({ message: 'Produto atualizado com sucesso!', produto: produtoAtualizado });
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      return res.status(500).json({ message: 'Erro ao atualizar produto.' });
    }
  }

  public static async deletarProduto(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ProdutoService.deletarProduto(id ? parseInt(id) : 0);
      return res.status(200).json({ message: 'Produto deletado com sucesso!' });
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      return res.status(500).json({ message: 'Erro ao deletar produto.' });
    }
  }
}
