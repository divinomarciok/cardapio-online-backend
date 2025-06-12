import { AppDataSource } from "../config/db.datasource";
import { Cupom } from "../models/cupons";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class CupomRepositorio extends BaseRepository<Cupom> {
  constructor() {
    super(AppDataSource.getRepository(Cupom));
  }
}