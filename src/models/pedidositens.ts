import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Pedido } from "./pedidos";
import { Produto } from "./produtos";
import { PedidoItemAdicional } from "./pedidositensadicionais";

@Entity("pedidos_itens")
export class PedidoItem {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    id_pedido!: number;

    @Column()
    id_produto!: number;

    @Column("decimal")
    valor_final!: number;

    @Column("decimal")
    valor_inicial!: number;

    @Column({ nullable: true })
    observacao?: string;

    @ManyToOne(() => Pedido, pedido => pedido.itens)
    @JoinColumn({ name: "id_pedido" })
    pedido!: Pedido;

    @ManyToOne(() => Produto, produto => produto.pedidoItens)
    @JoinColumn({ name: "id_produto" })
    produto!: Produto;

    @OneToMany(() => PedidoItemAdicional, pedidoItemAdicional => pedidoItemAdicional.pedidoItem)
    adicionais!: PedidoItemAdicional[];
}