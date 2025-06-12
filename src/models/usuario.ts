// src/entity/Usuario.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Permissao } from "./permissao";

@Entity("usuarios")
export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    id_permissao!: number;
    // Adicione o operador "!" para informar ao TypeScript que a propriedade será inicializada pelo TypeORM
    @Column()
    cpf!: string;

    @Column()
    sobrenome!: string;

    @Column()
    email!: string;

    @Column()
    telefone?: string;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @ManyToOne(() => Permissao, permissao => permissao.usuarios)
    @JoinColumn({ name: "id_permissao" })
    permissao: Permissao | undefined;
}
