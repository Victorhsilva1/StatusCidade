/*********************** 
 * Objetivo: Arquivo de funções para gerenciar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Victor Hugo Rocha da Silva
 * Versão: 1.0
*************************/

const MESSAGE_ERRO = {
    status: false,
    status_code: 500,
    development: 'Victor Hugo Rocha da Silva'
}
const dados = require('./estados_cidades.js')



// Função que retorna todos os estados
const getAllEstados = function () {
    //criando uma message mandando atributo true, 200, o desenvolvedor e
    // estou mandando um objeto chamado uf que é um array
    let message = {
        status: true,
        status_code: 200,
        development: 'Victor Hugo Rocha da Silva',
        uf: []
    }

    // for each sendo função de call back, para cada indice, retorna tudo que esta nos indices
    //e vai devolver em uma variável chamada item
    dados.listaDeEstados.estados.forEach(function (item) {
        //push só existe por que uf é um array
        message.uf.push(item.sigla)
    })

    message.quantidade = message.uf.length



    if (message.uf.length > 0)
        //saída verdadeira 200
        return message

    //saída falsa 500
    else
        return MESSAGE_ERRO

}

// Função que retorna um estado pesquisando pelas siglas
const getEstadoBySigla = function (sigla) {
    let dadosEstado = dados.listaDeEstados.estados.find(estados => estados.sigla == sigla.toUpperCase())
    if (dadosEstado) {
        let message = {
            status: true,
            status_code: 200,
            development: 'Victor Hugo Rocha da Silva',
            uf: dadosEstado.sigla,
            descricao: dadosEstado.nome,
            capital: dadosEstado.capital,
            regiao: dadosEstado.regiao
        }

        return message
    } else {
        return MESSAGE_ERRO
    }

}

// Função que retorna a capital referente a um estado pesquisando pela sigla
const getCapitalBySigla = function (sigla) {

    let dadosCapital = dados.listaDeEstados.estados.find(estados => estados.sigla == sigla.toUpperCase())
    if (dadosCapital) {
        let message = {
            status: true,
            status_code: 200,
            development: 'Victor Hugo Rocha da Silva',
            uf: dadosEstado.sigla,
            descricao: dadosEstado.nome,
            capital: dadosEstado.capital,
            regiao: dadosEstado.regiao
        }

        return message
    } else {
        return MESSAGE_ERRO
    }
}

// Função que retorna a região de um estado
const getEstadosByRegiao = function (regiao) {

}

// Função que retorna uma lista de estados referente as capitais do país
const getVerifyCapitaisDoPais = function () {


}

// Função que retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function (sigla) {


}

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getVerifyCapitaisDoPais,
    getCidadesBySigla
}