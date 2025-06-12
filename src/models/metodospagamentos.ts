import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "./pedidos";

@Entity("metodos_pagamentos")
export class MetodoPagamento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    descricao!: string;

    @OneToMany(() => Pedido, pedido => pedido.metodoPagamento)
    pedidos!: Pedido[];
}