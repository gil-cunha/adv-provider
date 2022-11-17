// Carregamento dos módulos
const express = require('express');
const app = express();
const port = "https://adv-provider.herokuapp.com/" || 8080;
app.listen(port);
console.log('Server started! At: ' + port);

app.use(express.static(__dirname + '/views'));

app.get('/api/users', function(req, res){
    const user_id = req.param('id');
    const token = req.param('token');
    const geo = req.param('geo');
    res.send(user_id + ' ' + token + ' ' + geo);
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

app.post('/api/users', function(req, res){
    const user_id = req.body.id;
    const token = req.body.token;
    const geo = req.body.geo;
    res.send(user_id + ' ' + token + ' ' + geo);
})