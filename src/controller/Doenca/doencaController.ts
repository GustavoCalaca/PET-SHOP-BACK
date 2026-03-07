import { Request, Response } from 'express';
import { DoencaService } from "../../service/doenca/doencaService";

export class DoencaController {
  private service: DoencaService; 

  constructor() { 
    this.service = new DoencaService();
  }

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const doenca = await this.service.create(req.body);
      if (!doenca) {
        res.status(400).json({ error: 'Erro ao criar registro' });
        return;
      }
      res.status(201).json(doenca);
    } catch (error: any) {
      res.status(400).json({ error: error.message || 'Erro ao criar registro' });
    }
  };

  getAll = async (_req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.service.getAll();
      res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ error: error.message || 'Erro ao buscar dados' });
    }
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const doenca = await this.service.getById(id);
      
      if (!doenca) {
        res.status(404).json({ error: 'Registro não encontrado' });
        return;
      }

      res.status(200).json(doenca);
    } catch (error: any) {
      res.status(400).json({ error: error.message || 'Erro ao buscar registro' });
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const doenca = await this.service.update(id, req.body);
      
      if (!doenca) {
        res.status(404).json({ error: 'Registro não encontrado' });
        return;
      }

      res.status(200).json(doenca);
    } catch (error: any) {
      res.status(400).json({ error: error.message || 'Erro ao atualizar registro' });
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await this.service.delete(id);
      
      if (!deleted) {
        res.status(404).json({ error: 'Registro não encontrado' });
        return;
      }
      
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message || 'Erro ao deletar registro' });
    }
  };
}
