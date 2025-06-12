import { AppDataSource } from "../config/db.datasource";
import { Permissao } from "../models/permissao";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class PermissaoRepositorio extends BaseRepository<Permissao> {
  constructor() {
    super(AppDataSource.getRepository(Permissao));
  }
}