import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668301735478 implements MigrationInterface {
    name = 'default1668301735478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "empresasClientes" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cnpj" character varying NOT NULL, "endereco" character varying, "dataCadastro" TIMESTAMP NOT NULL, CONSTRAINT "PK_b3faca1dd8a7155bae765a842b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome" character varying(40) NOT NULL, "cpf" character varying(14) NOT NULL, "senha" character varying(16) NOT NULL, "idEmpresa" integer, CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "usuario" ADD CONSTRAINT "FK_f18aaac18b429bfff693ac7ac41" FOREIGN KEY ("idEmpresa") REFERENCES "empresasClientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" DROP CONSTRAINT "FK_f18aaac18b429bfff693ac7ac41"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
        await queryRunner.query(`DROP TABLE "empresasClientes"`);
    }

}
