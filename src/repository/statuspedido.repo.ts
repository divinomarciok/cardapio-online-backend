import { AppDataSource } from "../config/db.datasource";
import { StatusPedido } from "../models/statuspedidos";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class StatusPedidoRepositorio extends BaseRepository<StatusPedido> {
  constructor() {
    super(AppDataSource.getRepository(StatusPedido));
  }
}