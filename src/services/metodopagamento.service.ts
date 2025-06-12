import { MetodoPagamentoRepositorio } from "../repository/metodopagamento.repo";
import { MetodoPagamento } from "../models/metodospagamentos";

export class MetodoPagamentoService {
  private metodoPagamentoRepo: MetodoPagamentoRepositorio;

  constructor() {
    this.metodoPagamentoRepo = new MetodoPagamentoRepositorio();
  }

  async criarMetodoPagamento(metodoPagamentoData: MetodoPagamento): Promise<MetodoPagamento> {
    return this.metodoPagamentoRepo.create(metodoPagamentoData);
  }

  async listarMetodosPagamento(): Promise<MetodoPagamento[]> {
    return this.metodoPagamentoRepo.list();
  }

  async buscarMetodoPagamentoPorId(id: number): Promise<MetodoPagamento | null> {
    return this.metodoPagamentoRepo.findByid(id);
  }

  async atualizarMetodoPagamento(id: number, metodoPagamentoData: Partial<MetodoPagamento>): Promise<MetodoPagamento | null> {
    return this.metodoPagamentoRepo.update(id, metodoPagamentoData);
  }

  async excluirMetodoPagamento(id: number): Promise<boolean> {
    return this.metodoPagamentoRepo.delete(id);
  }
}