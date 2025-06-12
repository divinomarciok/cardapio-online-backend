import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "./pedidos";

@Entity("cupons")
export class Cupom {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("decimal")
    valor!: number;

    @Column()
    descricao!: string;

    @OneToMany(() => Pedido, pedido => pedido.cupom)
    pedidos!: Pedido[];
}