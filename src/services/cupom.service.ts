import { CupomRepositorio } from "../repository/cupom.repo";
import { Cupom } from "../models/cupons";

export class CupomService {
  private cupomRepo: CupomRepositorio;

  constructor() {
    this.cupomRepo = new CupomRepositorio();
  }

  async criarCupom(cupomData: Cupom): Promise<Cupom> {
    return this.cupomRepo.create(cupomData);
  }

  async listarCupons(): Promise<Cupom[]> {
    return this.cupomRepo.list();
  }

  async buscarCupomPorId(id: number): Promise<Cupom | null> {
    return this.cupomRepo.findByid(id);
  }

  async atualizarCupom(id: number, cupomData: Partial<Cupom>): Promise<Cupom | null> {
    return this.cupomRepo.update(id, cupomData);
  }

  async excluirCupom(id: number): Promise<boolean> {
    return this.cupomRepo.delete(id);
  }
}