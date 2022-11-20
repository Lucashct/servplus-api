import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668727042985 implements MigrationInterface {
    name = 'default1668727042985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empresasClientes" DROP COLUMN "dataCadastro"`);
        await queryRunner.query(`ALTER TABLE "empresasClientes" ADD "dataCadastro" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empresasClientes" DROP COLUMN "dataCadastro"`);
        await queryRunner.query(`ALTER TABLE "empresasClientes" ADD "dataCadastro" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

}
