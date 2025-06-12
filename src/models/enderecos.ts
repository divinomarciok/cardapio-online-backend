import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity("enderecos")
export class Endereco {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    id_usuario!: number;

    @Column()
    cep!: string;

    @Column()
    rua!: string;

    @Column()
    bairro!: string;

    @Column()
    numero!: string;

    @Column()
    referencia?: string;

    @Column()
    complemento?: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "id_usuario" })
    usuario!: Usuario;
}