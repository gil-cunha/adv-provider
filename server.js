var express = require('express');
var app = express();
var fs = require("fs");


app.get('/configurar.html', function (req, res) {
    res.end("Página de Configuração da Atividade");
 })

 app.get('/json-params', function (req, res) {
    fs.readFile( __dirname + "/" + "json-params-atividade.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
     });
 })

 app.get('/json-analytics', function (req, res) {
    fs.readFile( __dirname + "/" + "json-params-analytics.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
     });
 })


















/*************************************************************************************************/
/*************************************************************************************************/
// GET (all)
/*************************************************************************************************/
/*************************************************************************************************/
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

/*************************************************************************************************/
/*************************************************************************************************/
// GET (by id)
/*************************************************************************************************/
/*************************************************************************************************/
app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

/*************************************************************************************************/
/*************************************************************************************************/
// POST
/*************************************************************************************************/
/*************************************************************************************************/
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end(JSON.stringify(data));
   });
})


/*************************************************************************************************/
/*************************************************************************************************/
// DELETE (by id)
/*************************************************************************************************/
/*************************************************************************************************/

app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})