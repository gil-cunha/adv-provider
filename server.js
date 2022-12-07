var express = require('express');
var fs = require("fs");
const http = require('http');
const url = require('url');
const path = require('path');

var app = express();
const port = process.env.PORT || 8080;
app.listen(port);
app.use(express.static('views'));

/*************************************************************************************************/
/*************************************************************************************************/
// Configurar
/*************************************************************************************************/
/*************************************************************************************************/
app.get('/configurar.html', function (req, res) { 
   res.sendFile(path.join(__dirname + "/views/html/configurar-atividade.html"));
})

app.get('/configurar', function (req, res) { 
   res.sendFile(path.join(__dirname + "/views/configurar.html"));
})

app.get('/config_url.html', function (req, res) { 
   res.sendFile(path.join(__dirname + "/views/configurar.html"));
})

app.get('/config_url', function (req, res) { 
   res.sendFile(path.join(__dirname + "/views/configurar.html"));
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