import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Adicional } from "./adicionais";
import { PedidoItem } from "./pedidositens";

@Entity("produtos")
export class Produto {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    foto!: string;

    @Column()
    nome!: string;

    @Column()
    descricao!: string;

    @Column()
    quantidade!: string;

    @Column("decimal")
    valor_final!: number;

    @Column("decimal")
    valor_inicial!: number;

    @OneToMany(() => Adicional, adicional => adicional.produto)
    adicionais!: Adicional[];

    @OneToMany(() => PedidoItem, pedidoItem => pedidoItem.produto)
    pedidoItens!: PedidoItem[];
}