import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrationTwo1749692677524 implements MigrationInterface {
    name = 'InitialMigrationTwo1749692677524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "status_pedidos" ("id" SERIAL NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_c3a64929bcfd2fbd5c357be881e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "metodos_pagamentos" ("id" SERIAL NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_96b8d71257ec0b247cc6adc4ef3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cupons" ("id" SERIAL NOT NULL, "valor" numeric NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_a391ecb025ec40b07972ed7de19" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos_itens" ("id" SERIAL NOT NULL, "id_pedido" integer NOT NULL, "id_produto" integer NOT NULL, "valor_final" numeric NOT NULL, "valor_inicial" numeric NOT NULL, "observacao" character varying, CONSTRAINT "PK_64a3184c16f596af092d76bc371" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" SERIAL NOT NULL, "id_usuario" integer NOT NULL, "id_status_pedido" integer NOT NULL, "id_metodo_pagamento" integer NOT NULL, "id_cupom" integer, "valor_total_final" numeric NOT NULL, "valor_total_inicial" numeric NOT NULL, "observacao" character varying, "tempo_criacao" TIMESTAMP NOT NULL DEFAULT now(), "tempo_atualizacao" TIMESTAMP NOT NULL DEFAULT now(), "retirada" boolean NOT NULL, "cep" character varying, "rua" character varying, "bairro" character varying, "numero" character varying, "referencia" character varying, "complemento" character varying, CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos_itens_adicionais" ("id" SERIAL NOT NULL, "id_pedido" integer NOT NULL, "id_adicional" integer NOT NULL, "valor_final" numeric NOT NULL, "valor_inicial" numeric NOT NULL, "quantidade" numeric NOT NULL, "pedidoItemId" integer, CONSTRAINT "PK_920e84a760b5a952d6bd34d8ee4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adicionais" ("id" SERIAL NOT NULL, "id_produto" integer NOT NULL, "foto" character varying NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "quantidade" character varying NOT NULL, "valor_final" numeric NOT NULL, "valor_inicial" numeric NOT NULL, CONSTRAINT "PK_8f6e4ce7a1fbddb638555b79bae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "produtos" ("id" SERIAL NOT NULL, "foto" character varying NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "quantidade" character varying NOT NULL, "valor_final" numeric NOT NULL, "valor_inicial" numeric NOT NULL, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "enderecos" ("id" SERIAL NOT NULL, "id_usuario" integer NOT NULL, "cep" character varying NOT NULL, "rua" character varying NOT NULL, "bairro" character varying NOT NULL, "numero" character varying NOT NULL, "referencia" character varying NOT NULL, "complemento" character varying NOT NULL, CONSTRAINT "PK_208b05002dcdf7bfbad378dcac1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens" ADD CONSTRAINT "FK_62d5e2b11667cbbacd0eb86cb8f" FOREIGN KEY ("id_pedido") REFERENCES "pedidos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens" ADD CONSTRAINT "FK_9108d356b37fc2f86094a2cfbb2" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_c73ff005045831d7826467e645d" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_04b71a93d13c5c6a9a04db09d18" FOREIGN KEY ("id_status_pedido") REFERENCES "status_pedidos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_d906f1d367a44f09b2b12235803" FOREIGN KEY ("id_metodo_pagamento") REFERENCES "metodos_pagamentos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_dcb750959b6d98f4daa355b3bc9" FOREIGN KEY ("id_cupom") REFERENCES "cupons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens_adicionais" ADD CONSTRAINT "FK_fca4d760a8938134f641b2af2a5" FOREIGN KEY ("id_pedido") REFERENCES "pedidos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens_adicionais" ADD CONSTRAINT "FK_6c77e41a62acbc3a3c252460b10" FOREIGN KEY ("id_adicional") REFERENCES "adicionais"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens_adicionais" ADD CONSTRAINT "FK_a1605e83330f3b8b4b2888ef310" FOREIGN KEY ("pedidoItemId") REFERENCES "pedidos_itens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adicionais" ADD CONSTRAINT "FK_347c7c3de1755840fdfefadf11c" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "enderecos" ADD CONSTRAINT "FK_9aba5c976aeb565dbe3e8c97c28" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "enderecos" DROP CONSTRAINT "FK_9aba5c976aeb565dbe3e8c97c28"`);
        await queryRunner.query(`ALTER TABLE "adicionais" DROP CONSTRAINT "FK_347c7c3de1755840fdfefadf11c"`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens_adicionais" DROP CONSTRAINT "FK_a1605e83330f3b8b4b2888ef310"`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens_adicionais" DROP CONSTRAINT "FK_6c77e41a62acbc3a3c252460b10"`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens_adicionais" DROP CONSTRAINT "FK_fca4d760a8938134f641b2af2a5"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_dcb750959b6d98f4daa355b3bc9"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_d906f1d367a44f09b2b12235803"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_04b71a93d13c5c6a9a04db09d18"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_c73ff005045831d7826467e645d"`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens" DROP CONSTRAINT "FK_9108d356b37fc2f86094a2cfbb2"`);
        await queryRunner.query(`ALTER TABLE "pedidos_itens" DROP CONSTRAINT "FK_62d5e2b11667cbbacd0eb86cb8f"`);
        await queryRunner.query(`DROP TABLE "enderecos"`);
        await queryRunner.query(`DROP TABLE "produtos"`);
        await queryRunner.query(`DROP TABLE "adicionais"`);
        await queryRunner.query(`DROP TABLE "pedidos_itens_adicionais"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "pedidos_itens"`);
        await queryRunner.query(`DROP TABLE "cupons"`);
        await queryRunner.query(`DROP TABLE "metodos_pagamentos"`);
        await queryRunner.query(`DROP TABLE "status_pedidos"`);
    }

}
