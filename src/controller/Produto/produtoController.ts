import { Request, Response } from 'express';
import { ProdutoService } from '../../service/Produto/produtoService';

export class ProdutoController {

  
  public static async adicionarProduto(req: Request, res: Response) {
    const produto = req.body;
    const novoProduto = await ProdutoService.cadastrarProduto(produto);
    return res.status(201).json({ message: 'Produto cadastrado com sucesso!', produto: novoProduto });
  }

  
  public static async listarProdutos(req: Request, res: Response) {
    const produtos = await ProdutoService.listarProdutos();
    return res.status(200).json(produtos);
  }

 
  public static async atualizarProduto(req: Request, res: Response) {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    const produtoAtualizado = await ProdutoService.atualizarProduto(id, dadosAtualizados);
    return res.status(200).json({ message: 'Produto atualizado com sucesso!', produto: produtoAtualizado });
  }

 
  public static async deletarProduto(req: Request, res: Response) {
    const id = req.params.id;
    await ProdutoService.deletarProduto(id);
    return res.status(200).json({ message: 'Produto deletado com sucesso!' });
  }
}
