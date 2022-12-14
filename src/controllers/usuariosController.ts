import { Request, Response } from "express";
import { usuarioRepository } from "../repositorys/usuarioRepository";
import { Resposta } from "../util/Resposta";
import { StatusResultado } from "../util/enums/StatusResultados";

export class UsuariosController {
  public async criarUsuario(req: Request, res: Response) {
    
    const { 
      nome,
      cpf,
      senha,
      idEmpresaCliente
    } = req.body

    try {
      const resposta = new Resposta();
      
      const novoUsuario = usuarioRepository.create({ nome: nome, cpf: cpf, senha: senha, empresaCliente: {id: idEmpresaCliente} });
      await usuarioRepository.save(novoUsuario);
      
      resposta.setItem(novoUsuario);
      resposta.setMensagem('Usuário gravado com sucesso.');
      resposta.setStatus(StatusResultado.SUCESSO);

      return res.status(201).json(resposta.montarResultado());
    } catch (error) {
      const resposta = new Resposta();
      resposta.setMensagem('Erro ao gravar o usuário');
      resposta.setStatus(StatusResultado.ERRO);
    
      console.log(error);
      return res.status(500).json(resposta.montarResultado());
    }
  }
}