import { PedidoItemAdicionalRepositorio } from "../repository/pedidoitemadicional.repo";
import { PedidoItemAdicional } from "../models/pedidositensadicionais";

export class PedidoItemAdicionalService {
  private pedidoItemAdicionalRepo: PedidoItemAdicionalRepositorio;

  constructor() {
    this.pedidoItemAdicionalRepo = new PedidoItemAdicionalRepositorio();
  }

  async criarPedidoItemAdicional(pedidoItemAdicionalData: PedidoItemAdicional): Promise<PedidoItemAdicional> {
    return this.pedidoItemAdicionalRepo.create(pedidoItemAdicionalData);
  }

  async listarPedidoItensAdicionais(): Promise<PedidoItemAdicional[]> {
    return this.pedidoItemAdicionalRepo.list();
  }

  async buscarPedidoItemAdicionalPorId(id: number): Promise<PedidoItemAdicional | null> {
    return this.pedidoItemAdicionalRepo.findByid(id);
  }

  async atualizarPedidoItemAdicional(id: number, pedidoItemAdicionalData: Partial<PedidoItemAdicional>): Promise<PedidoItemAdicional | null> {
    return this.pedidoItemAdicionalRepo.update(id, pedidoItemAdicionalData);
  }

  async excluirPedidoItemAdicional(id: number): Promise<boolean> {
    return this.pedidoItemAdicionalRepo.delete(id);
  }
}