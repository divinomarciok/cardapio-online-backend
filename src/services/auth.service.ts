// src/services/auth.service.ts
import jwt from 'jsonwebtoken';
import { UsuarioService } from './usuario.service';
import bcrypt from 'bcrypt';

export class AuthService {
  private usuarioService: UsuarioService;

  constructor() {
    this.usuarioService = new UsuarioService();
  }

  async login(username: string, password: string): Promise<{ token: string } | null> {
    
    const usuario = await this.usuarioService.buscarPorusername(username); 
    
    if (!usuario) {
      return null;
    }

    const isPasswordValid = password === usuario.password;    
    if (!isPasswordValid) {
      return null;
    }

    const secret = process.env.JWT_SECRET || 'default_secret';
    const token = jwt.sign({ id: usuario.id, username: usuario.username, permissao: usuario.id_permissao }, secret, {
      expiresIn: '1d'
    });

    return { token };
  }
}
