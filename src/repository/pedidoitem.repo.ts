import { AppDataSource } from "../config/db.datasource";
import { PedidoItem } from "../models/pedidositens";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class PedidoItemRepositorio extends BaseRepository<PedidoItem> {
  constructor() {
    super(AppDataSource.getRepository(PedidoItem));
  }
}