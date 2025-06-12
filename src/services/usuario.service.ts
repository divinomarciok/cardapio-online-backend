import { UsuarioRepositorio } from "../repository/usuario.repo";
import { Usuario } from "../models/usuario";

export class UsuarioService {
  private userRepo: UsuarioRepositorio;

  constructor() {
    this.userRepo = new UsuarioRepositorio();
  }

  async criarUsuario(userData: Usuario): Promise<Usuario> {
    return this.userRepo.create(userData);
  }

  async listarUsuarios(): Promise<Usuario[]> {
    return this.userRepo.list();
  }

  async buscarPorusername(username : string): Promise<Usuario | null>{
    return this.userRepo.findByusername(username);
  }

  async buscarUsuarioPorId(id: number): Promise<Usuario | null> {
    return this.userRepo.findByid(id);
  }

  async atualizarUsuario(id: number, userData: Partial<Usuario>): Promise<Usuario | null> {
    return this.userRepo.update(id, userData);
  }

  async excluirUsuario(id: number): Promise<boolean> {
    return this.userRepo.delete(id);
  }
}