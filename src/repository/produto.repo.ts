import { AppDataSource } from "../config/db.datasource";
import { Produto } from "../models/produtos";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class ProdutoRepositorio extends BaseRepository<Produto> {
  constructor() {
    super(AppDataSource.getRepository(Produto));
  }
}