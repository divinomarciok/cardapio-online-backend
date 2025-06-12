import { AppDataSource } from "../config/db.datasource";
import { Usuario } from "../models/usuario";
import { BaseRepository } from "../interface/implementation/base.repositorys";

export class UsuarioRepositorio extends BaseRepository<Usuario>{
  constructor(){
    super(AppDataSource.getRepository(Usuario));
  }
}