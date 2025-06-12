import { AppDataSource } from "../config/db.datasource";
import { PedidoItemAdicional } from "../models/pedidositensadicionais";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class PedidoItemAdicionalRepositorio extends BaseRepository<PedidoItemAdicional> {
  constructor() {
    super(AppDataSource.getRepository(PedidoItemAdicional));
  }
}