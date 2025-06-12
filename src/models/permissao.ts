import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Usuario } from "./usuario";

@Entity("permissoes")
export class Permissao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @OneToMany(() => Usuario, usuario => usuario.permissao)
    usuarios: Usuario[];
}
