import { Request, Response } from "express";
import { empresaClienteRepository } from "../repositorys/empresaClienteRepository";
import { StatusResultado } from "../util/enums/StatusResultados";
import { criarIdEmpresaCliente } from "../util/funcoes";
import { Resposta } from "../util/Resposta";

export class EmpresaClienteController {

  public async criarEmpresaCliente(req: Request, res: Response) {
    const {
      nome,
      cnpj,
      endereco,
    } = req.body;

    try {
      const resposta = new Resposta();

      const novaEmpresaCliente = empresaClienteRepository.create({
        nome: nome,
        cnpj: cnpj,
        endereco: endereco,
        idDeCadastro: await criarIdEmpresaCliente(cnpj)
      });

      await empresaClienteRepository.save(novaEmpresaCliente);

      resposta.setItem(novaEmpresaCliente);
      resposta.setMensagem('Empresa cliente cadastrada com sucesso!');
      resposta.setStatus(StatusResultado.SUCESSO);

      res.status(201).json(resposta.montarResultado())
    } catch (error) {
      const resposta = new Resposta();

      resposta.setMensagem('Erro ao cadastrar nova Empresa Cliente!');
      resposta.setStatus(StatusResultado.ERRO);
      
      console.log(error);

      res.status(500).json(resposta.montarResultado())
    }
  }
}