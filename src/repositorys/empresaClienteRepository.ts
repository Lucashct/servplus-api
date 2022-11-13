import { AppDataSource } from "../data-source";
import { EmpresaCliente } from "../entities/EmpresaCliente";

export const empresaClienteRepository = AppDataSource.getRepository(EmpresaCliente);