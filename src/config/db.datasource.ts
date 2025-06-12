import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';
import { Permissao } from '../models/permissao';
import { Usuario } from '../models/usuario';
import { Produto } from '../models/produtos';
import { StatusPedido } from '../models/statuspedidos';
import { Adicional } from '../models/adicionais';
import { Cupom } from '../models/cupons';
import { Endereco } from '../models/enderecos';
import { MetodoPagamento } from '../models/metodospagamentos';
import { Pedido } from '../models/pedidos';
import { PedidoItem } from '../models/pedidositens';
import { PedidoItemAdicional } from '../models/pedidositensadicionais';

dotenv.config();

export const AppDataSource = new DataSource({
  
  type: 'postgres',  
  host: process.env.DB_HOST || 'localhost', 
  port: parseInt(process.env.DB_PORT || '5432', 10), 
  username: process.env.DB_USERNAME || 'user',  
  password: process.env.DB_PASSWORD || 'password',  
  database: process.env.DB_DATABASE || 'db_cardapio',  
  synchronize: true,
  //logging: ["query", "error"],
  logging:["error"],
  entities: [Adicional,Cupom,Endereco,MetodoPagamento,Pedido,PedidoItem,PedidoItemAdicional,Permissao,Produto,StatusPedido,Usuario], // Caminho absoluto para entidades compiladas
  migrations: [path.join(__dirname, "../migrations/*.js"),
    path.join(__dirname, "../migrations/*.ts")
  ], // Caminho absoluto para migrations compiladas
  subscribers: [],  
});