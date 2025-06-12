import { PermissaoRepositorio } from "../repository/permissao.repo";
import { Permissao } from "../models/permissao";

export class PermissaoService {
  private permissaoRepo: PermissaoRepositorio;

  constructor() {
    this.permissaoRepo = new PermissaoRepositorio();
  }

  async criarPermissao(permissaoData: Permissao): Promise<Permissao> {
    return this.permissaoRepo.create(permissaoData);
  }

  async listarPermissoes(): Promise<Permissao[]> {
    return this.permissaoRepo.list();
  }

  async buscarPermissaoPorId(id: number): Promise<Permissao | null> {
    return this.permissaoRepo.findByid(id);
  }

  async atualizarPermissao(id: number, permissaoData: Partial<Permissao>): Promise<Permissao | null> {
    return this.permissaoRepo.update(id, permissaoData);
  }

  async excluirPermissao(id: number): Promise<boolean> {
    return this.permissaoRepo.delete(id);
  }
}