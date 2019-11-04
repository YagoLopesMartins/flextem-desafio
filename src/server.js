// Carregando módulos/Dependencias inicias
const express  = require('express')
const bodyParser  = require('body-parser')
const  mongoose = require('mongoose')
const path = require('path')

const app = express()

// Body Parser
    // para que possamaos trablhar com arquivos json
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json())
// Public
    app.use(express.static(path.join(__dirname,"public")))

require('./controllers/authController')(app);
require('./controllers/atividadeController')(app);

// rotas simples com envio de mensagens
app.get('/', function (req, res) {
    // res.send("BEM VINDO!");
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/api/atividades', function (req, res) {
    res.sendFile(__dirname + "/views/atividadesAdd.html");
});

// servidor on na porta
const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log('Servidor rodando na porta 8081! Acesse: http://localhost:5000')
})