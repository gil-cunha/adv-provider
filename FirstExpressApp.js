// Instalação do módulo Express
const express = require('express');

// Configurar o servidor da aplicação
const app = express();
const server = app.listen(3000, function(){
    console.log("Servidor em execução na porta %s...", server.address().port);
});

// Estabelecer rotas
app.get('/', function(req, res){
    res.send('Olá Mundo');
});

app.get('/help', function(req, res){
    res.send('Humm... Aqui não há nada para ver');
});