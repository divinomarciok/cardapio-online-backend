import { AppDataSource } from "../config/db.datasource";
import { MetodoPagamento } from "../models/metodospagamentos";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class MetodoPagamentoRepositorio extends BaseRepository<MetodoPagamento> {
  constructor() {
    super(AppDataSource.getRepository(MetodoPagamento));
  }
}