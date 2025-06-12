import { StatusPedidoRepositorio } from "../repository/statuspedido.repo";
import { StatusPedido } from "../models/statuspedidos";

export class StatusPedidoService {
  private statusPedidoRepo: StatusPedidoRepositorio;

  constructor() {
    this.statusPedidoRepo = new StatusPedidoRepositorio();
  }

  async criarStatusPedido(statusPedidoData: StatusPedido): Promise<StatusPedido> {
    return this.statusPedidoRepo.create(statusPedidoData);
  }

  async listarStatusPedidos(): Promise<StatusPedido[]> {
    return this.statusPedidoRepo.list();
  }

  async buscarStatusPedidoPorId(id: number): Promise<StatusPedido | null> {
    return this.statusPedidoRepo.findByid(id);
  }

  async atualizarStatusPedido(id: number, statusPedidoData: Partial<StatusPedido>): Promise<StatusPedido | null> {
    return this.statusPedidoRepo.update(id, statusPedidoData);
  }

  async excluirStatusPedido(id: number): Promise<boolean> {
    return this.statusPedidoRepo.delete(id);
  }
}