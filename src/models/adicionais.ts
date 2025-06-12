import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Produto } from "./produtos";
import { PedidoItemAdicional } from "./pedidositensadicionais";

@Entity("adicionais")
export class Adicional {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    id_produto!: number;

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

    @ManyToOne(() => Produto, produto => produto.adicionais)
    @JoinColumn({ name: "id_produto" })
    produto!: Produto;

    @OneToMany(() => PedidoItemAdicional, pedidoItemAdicional => pedidoItemAdicional.adicional)
    pedidoItensAdicionais!: PedidoItemAdicional[];
}