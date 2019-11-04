const express = require('express');
const Atividade = require('../models/Atividade');
const path = require('path')
const router = express.Router();

router.get('/', (req, res) => {
        // res.sendFile(__dirname + "/views/atividadesAdd.html");
      res.send({ ok: true });
});

router.post('/create', async (req, res) => {
    try{
      // criar novo usuario, pegando todos os parametros da requisicao
      const atividade = await Atividade.create(req.body);
   
       return res.send({ atividade });
   
     }catch(err){
        return res.status(400).send({ error: 'Não foi possível cadastrar a atividade'});
     }
});

router.get('/get', (req, res) =>{

  Atividade.find().populate("Responsavel").populate("Status").sort({date: 'desc'})
      .then((atividades) =>{
          res.send({ atividades : atividades})
      })
      .catch((err) =>{
          res.redirect("/api/atividades")
      })
 // res.send('Pagina de produtos')
})

module.exports = app => app.use('/atividades', router);