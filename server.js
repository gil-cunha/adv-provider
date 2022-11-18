var express = require('express');
var app = express();
var fs = require("fs");

const http = require('http');
const url = require('url');

/*************************************************************************************************/
/*************************************************************************************************/
// Configurar
/*************************************************************************************************/
/*************************************************************************************************/
app.get('/configurar.html', function (req, res) { 
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end("Página de Configuração da Atividade");
})

app.get('/configurar', function (req, res) { 
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end("Página de Configuração da Atividade");
})

app.get('/config_url.html', function (req, res) { 
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end("Página de Configuração da Atividade");
})

app.get('/config_url', function (req, res) { 
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end("Página de Configuração da Atividade");
})

/*************************************************************************************************/
/*************************************************************************************************/
// Ficheiro JSON dos parâmetros da atividade
/*************************************************************************************************/
/*************************************************************************************************/
app.get('/json-params', function (req, res) {
   fs.readFile( __dirname + "/" + "json-params-atividade.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/json_params_url', function (req, res) {
   fs.readFile( __dirname + "/" + "json-params-atividade.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

/*************************************************************************************************/
/*************************************************************************************************/
// deploy-atividade
/*************************************************************************************************/
/*************************************************************************************************/
app.get('/deploy', function (req, res) {
   const queryObject = url.parse(req.url, true).query;
   res.send("https://adv-provider.herokuapp.com/deploy/"+ queryObject['activityID']);
})

app.post('/deploy', function (req, res) {
   res.send("https://adv-provider.herokuapp.com/deploy/"+ req.query['activityID'] + "/" + req.query['inveniraStdID']);
})

app.get('/user_url', function (req, res) {
   const queryObject = url.parse(req.url, true).query;
   res.send("https://adv-provider.herokuapp.com/deploy/"+ queryObject['activityID']);
})

app.post('/user_url', function (req, res) {
   res.send("https://adv-provider.herokuapp.com/deploy/"+ req.query['activityID'] + "/" + req.query['inveniraStdID']);
})

/*************************************************************************************************/
/*************************************************************************************************/
// Ficheiro JSON dos analytics da atividade
/*************************************************************************************************/
/*************************************************************************************************/
app.get('/json-analytics', function (req, res) {
   fs.readFile( __dirname + "/" + "json-params-analytics.json", 'utf8', function (err, data) {
      console.log(data);
      res.end(data);
   });
})

app.get('/analytics_list_url', function (req, res) {
   fs.readFile( __dirname + "/" + "json-params-analytics.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

/*************************************************************************************************/
/*************************************************************************************************/
// Analytics
/*************************************************************************************************/
/*************************************************************************************************/

app.post('/analytics', function (req, res) {
   // res.send(request.body); // your JSON
   fs.readFile( __dirname + "/" + "analytics.json", 'utf8', function (err, data) {
      data = JSON.parse(data);
      res.end(JSON.stringify(data));
   });
})

app.post('/analytics_url', function (req, res) {
   // res.send(request.body); // your JSON
   fs.readFile( __dirname + "/" + "analytics.json", 'utf8', function (err, data) {
      data = JSON.parse(data);
      res.end(JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().PORT
   console.log("Example app listening at http://%s:%s", host, port)
})