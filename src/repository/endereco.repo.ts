import { AppDataSource } from "../config/db.datasource";
import { Endereco } from "../models/enderecos";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class EnderecoRepositorio extends BaseRepository<Endereco> {
  constructor() {
    super(AppDataSource.getRepository(Endereco));
  }
}