import { Router } from "express";
import { UsuariosController } from "./controllers/usuariosController";

const routes = Router();

//ROTAS USUARIOS
routes.post('usuario/gravar', new UsuariosController().criarUsuario);

export default routes;