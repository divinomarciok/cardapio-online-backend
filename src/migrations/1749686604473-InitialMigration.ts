import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1749686604473 implements MigrationInterface {
    name = 'InitialMigration1749686604473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuarios" ("id" SERIAL NOT NULL, "id_permissao" integer NOT NULL, "cpf" character varying NOT NULL, "sobrenome" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_d7281c63c176e152e4c531594a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permissoes" ("id" SERIAL NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_5a83561e7be8610760090b45c98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_6df0bfe7db32b19133793ad3d33" FOREIGN KEY ("id_permissao") REFERENCES "permissoes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_6df0bfe7db32b19133793ad3d33"`);
        await queryRunner.query(`DROP TABLE "permissoes"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
