import { UsuarioRepositorio } from "../repository/usuario.repo";
import { Usuario } from "../models/usuario";

export class UsuarioService {

  private userRepo: UsuarioRepositorio;

  constructor (){
    this.userRepo = new UsuarioRepositorio();
  }

  async criaUsuario (userData: Usuario): Promise<Usuario>{

    return this.userRepo.create(userData);

  }
  
}