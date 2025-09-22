/*********************** 
 * Objetivo: endPoints referente a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Victor Hugo Rocha da Silva
 * Versão: 1.0
 * 
 * Observações: Instalação do Express, Cors, Body-Parser
 * npm install express --save
 * npm install cors express --save
 * npm install body-parser --save
*************************/

const express = require('express') // Responsável pela API
const cors = require('cors') // Responsável pelas permissões da API (APP)
const bodyParser = require('body-parser') // Responsável por gerenciar a chegada dos dados da API com o front


// Retorna a porta do servidor atual ou colocamos uma porta local 
const PORT = process.PORT || 8080

// Criando uma instancia de uma classe do express
const app = express()

// Configuração de permissões 
app.use((request, response, next)=>{
    // Servidor de origem da API
    response.header('Access-Control-Allow-Origin', '*')
    // Verbos permitidos na API
    response.header('Access-Control-Allow-Methods', 'GET')
    //Carrega as configurações no cors da API
    // As permissões que estão sendo utilizadas aqui, colocando restrições
    app.use(cors())
    // Next é o proximo, no caso carregar os próximos endPoints
    next()
})

//endPoints

app.get('/v1/estados', function(request, response){
    
})

app.get('/v1/estados/:uf', function(request, response){
    
})

app.get('/v1/estados/capital/:uf', function(request, response){
    
})

app.get('/v1/estados/regiao/:regiao', function(request, response){
    
})

app.get('/v1/estados/pais', function(request, response){
    
})

app.get('/v1/estados/cidades/:uf', function(request, response){
    let sigla = request.params.uf

    let cidades = listaDeEstados.getCidadesBySigla(sigla)

    response.status
})

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})
