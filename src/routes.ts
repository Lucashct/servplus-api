import { Router } from "express";
import { EmpresaClienteController } from "./controllers/empresaClienteController";
import { UsuariosController } from "./controllers/usuariosController";

const routes = Router();

//ROTAS USUARIOS
routes.post('/usuario/gravar', new UsuariosController().criarUsuario);

//ROTAS EMPRESAS CLIENTE
routes.post('/empresa-cliente/gravar', new EmpresaClienteController().criarEmpresaCliente);

export default routes;