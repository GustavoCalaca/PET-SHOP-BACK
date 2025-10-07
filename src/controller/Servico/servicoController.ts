import { Request, Response } from 'express';
import { ServicoService } from '../../service/Servico/servicoService';


export class ServicoController {

 public static async adicionarServico(req: Request, res: Response) {
  try {
    const { id, nome, descricao, preco, duracao } = req.body;

   
    if (id !== undefined) {
      return res.status(400).json({ message: 'O campo "id". Ele é gerado automaticamente.' });
    }

  
    if (!nome && nome.trim() === '') {
      return res.status(400).json({ message: 'O campo "nome" é obrigatório.' });
    }

    if (!descricao && descricao.trim() === '') {
      return res.status(400).json({ message: 'O campo "descricao" é obrigatório.' });
    }

    if (preco === undefined && preco === null && isNaN(preco) && preco <= 0) {
      return res.status(400).json({ message: 'O campo "preco" é obrigatório e deve ser um número maior que zero.' });
    }

    if (duracao === undefined && duracao === null && isNaN(duracao) && duracao <= 0) {
      return res.status(400).json({ message: 'O campo "duracao" é obrigatório e deve ser um número maior que zero.' });
    }

    console.log('Dados recebidos para cadastro:', req.body);

    await ServicoService.cadastrarServico(req.body);
    return res.status(201).json({ message: 'Serviço cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao cadastrar serviço:', error);
    return res.status(500).json({ message: 'Erro ao cadastrar serviço.' });
  }
}


  public static async listarServico(req: Request, res: Response) {
    try {
      const servico = await ServicoService.listarServico();
      return res.status(200).json(servico);
    } catch (error) {
      console.error('Erro ao listar serviço:', error);
      return res.status(500).json({ message: 'Erro ao listar serviço.' });
    }
  }

  public static async atualizarServico(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { nome, descricao, preco, duracao } = req.body;

    // Validação dos campos obrigatórios
    if (!nome && nome.trim() === '') {
      return res.status(400).json({ message: 'O campo "nome" é obrigatório.' });
    }

    if (!descricao && descricao.trim() === '') {
      return res.status(400).json({ message: 'O campo "descricao" é obrigatório.' });
    }

    if (preco === undefined && preco === null && isNaN(preco) && preco <= 0) {
      return res.status(400).json({ message: 'O campo "preco" é obrigatório e deve ser um número maior que zero.' });
    }

    if (duracao === undefined && duracao === null && isNaN(duracao) && duracao <= 0) {
      return res.status(400).json({ message: 'O campo "duracao" é obrigatório e deve ser um número maior que zero.' });
    }

    await ServicoService.atualizarServico(id ? parseInt(id) : 0, req.body);
    return res.status(200).json({ message: 'Serviço atualizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    return res.status(500).json({ message: 'Erro ao atualizar serviço.' });
  }
}

  public static async deletarServico(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ServicoService.deletarServico(id ? parseInt(id) : 0);
      return res.status(200).json({ message: 'Serviço deletado com sucesso!' });
    } catch (error) {
      console.error('Erro ao deletar serviço:', error);
      return res.status(500).json({ message: 'Erro ao deletar serviço.' });
    }
  }
}
