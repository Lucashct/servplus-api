import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { EmpresaCliente } from "./EmpresaCliente"

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number

  @Column({length: 40})
  nome: string

  @Column({length: 14})
  cpf: string

  @Column({length: 16})
  senha: string

  @ManyToOne(() => EmpresaCliente, empresaCliente => empresaCliente.usuarios)
  @JoinColumn({ name: 'idEmpresa' })
  empresaCliente: EmpresaCliente
}
