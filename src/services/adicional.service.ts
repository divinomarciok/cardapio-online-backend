import { AdicionalRepositorio } from "../repository/adicional.repo";
import { Adicional } from "../models/adicionais";

export class AdicionalService {
  private adicionalRepo: AdicionalRepositorio;

  constructor() {
    this.adicionalRepo = new AdicionalRepositorio();
  }

  async criarAdicional(adicionalData: Adicional): Promise<Adicional> {
    return this.adicionalRepo.create(adicionalData);
  }

  async listarAdicionais(): Promise<Adicional[]> {
    return this.adicionalRepo.list();
  }

  async buscarAdicionalPorId(id: number): Promise<Adicional | null> {
    return this.adicionalRepo.findByid(id);
  }

  async atualizarAdicional(id: number, adicionalData: Partial<Adicional>): Promise<Adicional | null> {
    return this.adicionalRepo.update(id, adicionalData);
  }

  async excluirAdicional(id: number): Promise<boolean> {
    return this.adicionalRepo.delete(id);
  }
}