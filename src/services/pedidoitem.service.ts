import { PedidoItemRepositorio } from "../repository/pedidoitem.repo";
import { PedidoItem } from "../models/pedidositens";

export class PedidoItemService {
  private pedidoItemRepo: PedidoItemRepositorio;

  constructor() {
    this.pedidoItemRepo = new PedidoItemRepositorio();
  }

  async criarPedidoItem(pedidoItemData: PedidoItem): Promise<PedidoItem> {
    return this.pedidoItemRepo.create(pedidoItemData);
  }

  async listarPedidoItens(): Promise<PedidoItem[]> {
    return this.pedidoItemRepo.list();
  }

  async buscarPedidoItemPorId(id: number): Promise<PedidoItem | null> {
    return this.pedidoItemRepo.findByid(id);
  }

  async atualizarPedidoItem(id: number, pedidoItemData: Partial<PedidoItem>): Promise<PedidoItem | null> {
    return this.pedidoItemRepo.update(id, pedidoItemData);
  }

  async excluirPedidoItem(id: number): Promise<boolean> {
    return this.pedidoItemRepo.delete(id);
  }
}