import { DoencaDto } from "../../controller/dto/DoencaDto";
import { DoencaRepository } from "../../repository/doenca/doencaRepository";

export class DoencaService { 
  private repository: DoencaRepository;

  constructor() {
    this.repository = new DoencaRepository(); 
  }

  async create(data: Omit<DoencaDto, 'id' | 'created_at' | 'updated_at'>) {
    return await this.repository.create(data);
  }

  async getAll() {
    return await this.repository.getAll();
  }

  async getById(id: number) {
    return await this.repository.getById(id);
  }

  async update(id: number, data: Omit<DoencaDto, "id" | "created_at">) {
    return await this.repository.update(id, data);
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
