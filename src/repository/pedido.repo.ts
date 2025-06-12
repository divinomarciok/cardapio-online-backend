import { AppDataSource } from "../config/db.datasource";
import { Pedido } from "../models/pedidos";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class PedidoRepositorio extends BaseRepository<Pedido> {
  constructor() {
    super(AppDataSource.getRepository(Pedido));
  }
}