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
    // find é o método que retorna o primeiro elemento dos arrays
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
// caso a saída seja verdadeira - 200
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
    let dadosEstados = dados.listaDeEstados.estados.filter(estados => estados.regiao.toUpperCase() == regiao.toUpperCase())

    let estadosFormatados = [];
    dadosEstados.forEach(estado => {
        estadosFormatados.push({
            uf: estado.sigla,
            descricao: estado.nome
        });
    });

    if(dadosEstados) {
        let message = {
            status: true, 
            status_code: 200, 
            development: 'Victor Hugo Rocha da Silva', 
            regiao: regiao.toUpperCase(),
            estados: estadosFormatados
        }
    
        return message
    } else {
        return MESSAGE_ERRO
    }

}


const getVerifyCapitaisDoPais = function(){

    // filter é um método que permite filtar os itens com essa caracteristica
    let dadosCapitaisPais = dados.listaDeEstados.estados.filter(estados => estados.capital_pais)

    if(dadosCapitaisPais){

        let message = {
            status: true, 
            status_code: 200, 
            development: 'Victor Hugo Rocha da Silva', 
            capitais: []
        }

        //
        dadosCapitaisPais.forEach(function(item) {
            message.capitais.push({

                //parametros passados para retornas as informações
                capital_atual: item.capital_pais.capital,
                uf: item.sigla,
                descricao: item.nome,
                capital: item.capital,
                regiao: item.regiao,
                capital_pais_ano_inicio: item.capital_pais.ano_inicio,
                capital_pais_ano_termino: item.capital_pais.ano_fim
            })
        })

        return message
    } else{
        return MESSAGE_ERRO
    }

}

// Função que retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function (sigla) {
    let message = {
        status: true,
        status_code: 200,
        development: 'Victor Hugo Rocha da Silva',
        uf: dadosEstado.sigla,
        descricao: dadosEstado.nome,
        capitais: []
    }

}

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getVerifyCapitaisDoPais,
    getCidadesBySigla
}