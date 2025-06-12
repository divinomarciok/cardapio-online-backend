import { EnderecoRepositorio } from "../repository/endereco.repo";
import { Endereco } from "../models/enderecos";

export class EnderecoService {
  private enderecoRepo: EnderecoRepositorio;

  constructor() {
    this.enderecoRepo = new EnderecoRepositorio();
  }

  async criarEndereco(enderecoData: Endereco): Promise<Endereco> {
    return this.enderecoRepo.create(enderecoData);
  }

  async listarEnderecos(): Promise<Endereco[]> {
    return this.enderecoRepo.list();
  }

  async buscarEnderecoPorId(id: number): Promise<Endereco | null> {
    return this.enderecoRepo.findByid(id);
  }

  async atualizarEndereco(id: number, enderecoData: Partial<Endereco>): Promise<Endereco | null> {
    return this.enderecoRepo.update(id, enderecoData);
  }

  async excluirEndereco(id: number): Promise<boolean> {
    return this.enderecoRepo.delete(id);
  }
}