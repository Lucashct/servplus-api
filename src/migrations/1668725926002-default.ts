import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668725926002 implements MigrationInterface {
    name = 'default1668725926002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empresasClientes" DROP COLUMN "dataCadastro"`);
        await queryRunner.query(`ALTER TABLE "empresasClientes" ADD "dataCadastro" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empresasClientes" DROP COLUMN "dataCadastro"`);
        await queryRunner.query(`ALTER TABLE "empresasClientes" ADD "dataCadastro" date NOT NULL`);
    }

}
