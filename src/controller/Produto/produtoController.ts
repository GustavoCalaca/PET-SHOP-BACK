import { Request, Response } from 'express';
import { ProdutoService } from '../../service/Produto/produtoService';



export class ProdutoController {

  public static async addProduto(req: Request, res: Response) {
  try {
    const { nome, descricao, preco } = req.body;

    
    if (!nome && nome.trim() === '') {
      return res.status(400).json({ message: 'O campo "nome" é obrigatório.' });
    }

    if (!descricao && descricao.trim() === '') {
      return res.status(400).json({ message: 'O campo "descricao" é obrigatório.' });
    }

    if (preco === undefined && preco === null && isNaN(preco) && preco <= 0) {
      return res.status(400).json({ message: 'O campo "preco" é obrigatório e deve ser um número maior que zero.' });
    }

    await ProdutoService.addProduto(req.body);
    return res.status(201).json({ message: 'Produto cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    return res.status(500).json({ message: 'Erro ao cadastrar produto.' });
  }
}

  public static async listarProduto(req: Request, res: Response) {
    try {
      const produto = await ProdutoService.listarProduto();
      return res.status(200).json(produto);
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      return res.status(500).json({ message: 'Erro ao listar produto.' });
    }
  }

  public static async alterarProduto(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;

    if (!nome && nome.trim() === '') {
      return res.status(400).json({ message: 'O campo "nome" é obrigatório.' });
    }

    if (!descricao && descricao.trim() === '') {
      return res.status(400).json({ message: 'O campo "descricao" é obrigatório.' });
    }

    if (preco === undefined && preco === null && isNaN(preco) && preco <= 0) {
      return res.status(400).json({ message: 'O campo "preco" é obrigatório e deve ser um número maior que zero.' });
    }

    await ProdutoService.alterarProduto(id ? parseInt(id) : 0, req.body);
    return res.status(200).json({ message: 'Produto atualizado com sucesso!' });
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
