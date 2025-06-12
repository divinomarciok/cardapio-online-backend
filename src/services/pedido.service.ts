import { PedidoRepositorio } from "../repository/pedido.repo";
import { Pedido } from "../models/pedidos";

export class PedidoService {
  private pedidoRepo: PedidoRepositorio;

  constructor() {
    this.pedidoRepo = new PedidoRepositorio();
  }

  async criarPedido(pedidoData: Pedido): Promise<Pedido> {
    return this.pedidoRepo.create(pedidoData);
  }

  async listarPedidos(): Promise<Pedido[]> {
    return this.pedidoRepo.list();
  }

  async buscarPedidoPorId(id: number): Promise<Pedido | null> {
    return this.pedidoRepo.findByid(id);
  }

  async atualizarPedido(id: number, pedidoData: Partial<Pedido>): Promise<Pedido | null> {
    return this.pedidoRepo.update(id, pedidoData);
  }

  async excluirPedido(id: number): Promise<boolean> {
    return this.pedidoRepo.delete(id);
  }
}