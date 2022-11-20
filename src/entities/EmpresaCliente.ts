import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity('empresasClientes')
export class EmpresaCliente {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  nome: string

  @Column()
  cnpj: string
  
  @Column({ nullable: true })
  endereco: string

  @CreateDateColumn()
  dataCadastro: Date

  @Column()
  idDeCadastro: string

  @OneToMany(() => Usuario, usuario => usuario.empresaCliente)
  usuarios: Usuario[]
}