import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Usuario } from "./usuario";
import { StatusPedido } from "./statuspedidos";
import { MetodoPagamento } from "./metodospagamentos";
import { Cupom } from "./cupons";
import { PedidoItem } from "./pedidositens";

@Entity("pedidos")
export class Pedido {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    id_usuario!: number;

    @Column()
    id_status_pedido!: number;

    @Column()
    id_metodo_pagamento!: number;

    @Column({ nullable: true })
    id_cupom?: number;

    @Column("decimal")
    valor_total_final!: number;

    @Column("decimal")
    valor_total_inicial!: number;

    @Column({ nullable: true })
    observacao?: string;

    @CreateDateColumn()
    tempo_criacao!: Date;

    @UpdateDateColumn()
    tempo_atualizacao!: Date;

    @Column()
    retirada!: boolean;

    @Column({ nullable: true })
    cep?: string;

    @Column({ nullable: true })
    rua?: string;

    @Column({ nullable: true })
    bairro?: string;

    @Column({ nullable: true })
    numero?: string;

    @Column({ nullable: true })
    referencia?: string;

    @Column({ nullable: true })
    complemento?: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "id_usuario" })
    usuario!: Usuario;

    @ManyToOne(() => StatusPedido, statusPedido => statusPedido.pedidos)
    @JoinColumn({ name: "id_status_pedido" })
    statusPedido!: StatusPedido;

    @ManyToOne(() => MetodoPagamento, metodoPagamento => metodoPagamento.pedidos)
    @JoinColumn({ name: "id_metodo_pagamento" })
    metodoPagamento!: MetodoPagamento;

    @ManyToOne(() => Cupom, cupom => cupom.pedidos, { nullable: true })
    @JoinColumn({ name: "id_cupom" })
    cupom?: Cupom;

    @OneToMany(() => PedidoItem, pedidoItem => pedidoItem.pedido)
    itens!: PedidoItem[];
}