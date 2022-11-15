import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668545506515 implements MigrationInterface {
    name = 'default1668545506515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empresasClientes" ADD "idDeCadastro" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empresasClientes" DROP COLUMN "idDeCadastro"`);
    }

}
