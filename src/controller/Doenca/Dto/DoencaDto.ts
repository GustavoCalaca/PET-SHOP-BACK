export class DoencaDto {
  public id?: number;
  public nome?: string;
  public descricao?: string;
  public ativo?: boolean;
  public idpetshop?: number;
  public created_at?: Date;
  public updated_at?: Date; 

  constructor(data: any) {
    this.id = data.iddoenca ?? data.id;
    this.nome = data.nome;
    this.descricao = data.descricao;
    this.ativo = data.ativo;
    this.idpetshop = data.idpetshop;
    this.created_at = data.create_at ?? data.created_at;
    this.updated_at = data.update_at ?? data.updated_at;
  }
}
