import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "./pedidos";

@Entity("status_pedidos")
export class StatusPedido {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descricao!: string;

    @OneToMany(() => Pedido, pedido => pedido.statusPedido)
    pedidos!: Pedido[];
}