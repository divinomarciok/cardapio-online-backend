import { AppDataSource } from "../config/db.datasource";
import { Adicional } from "../models/adicionais";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class AdicionalRepositorio extends BaseRepository<Adicional> {
  constructor() {
    super(AppDataSource.getRepository(Adicional));
  }
}