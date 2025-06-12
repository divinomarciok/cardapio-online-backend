import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Pedido } from "./pedidos";
import { Adicional } from "./adicionais";
import { PedidoItem } from "./pedidositens";

@Entity("pedidos_itens_adicionais")
export class PedidoItemAdicional {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    id_pedido!: number;

    @Column()
    id_adicional!: number;

    @Column("decimal")
    valor_final!: number;

    @Column("decimal")
    valor_inicial!: number;

    @Column("decimal")
    quantidade!: number;

    @ManyToOne(() => Pedido)
    @JoinColumn({ name: "id_pedido" })
    pedido!: Pedido;

    @ManyToOne(() => Adicional, adicional => adicional.pedidoItensAdicionais)
    @JoinColumn({ name: "id_adicional" })
    adicional!: Adicional;

    @ManyToOne(() => PedidoItem, pedidoItem => pedidoItem.adicionais)
    pedidoItem!: PedidoItem;
}