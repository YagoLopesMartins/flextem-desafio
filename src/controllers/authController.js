const express = require('express');
// const Atividade = require('../models/Atividade');
const Usuario = require('../models/Usuario');
const router = express.Router();

// Rota apenas para teste não era necessário criar
router.post('/usuario', async (req, res) => {
    try{
      // criar novo usuario, pegando todos os parametros da requisicao
      const usuario = await Usuario.create(req.body);
   
       return res.send({ usuario });
   
     }catch(err){
        return res.status(400).send({ error: 'Não foi possível cadastrar a atividade'});
     }
   });

router.post('/authenticate', async(req, res) =>{
   
   // recebe email e senha do usuario na requisicao
   const { email, senha } = req.body;
   
   // Realiza busca na base procurando por usuario (email) e também pela senha
   const usuario = await Usuario.findOne({ email }).select('+senha');
   
   // Se nao conseguir encontrar usuario
   if(!usuario)
       return res.status(400).send({ error: 'Usuário não encontrado' });
   
   // verificar se a senha é realmente a de seu cadastro
   // importar bcrypt, pois senhas estao hasheadas, melhor utilizar funcoes de auxilio
   // Nesse caso, compara senha passada com senha da base de dados
  // if(! await bcrypt.compare(password, user.password))
       //return res.status(400).send({ error: 'Invalid password' });

    if(await senha != usuario.senha)
        return res.status(400).send({ error: 'Senha inválida' });
   
   // estamos removendo password para que nao volte aparecer 
   // para o usuario apos cadastro
   usuario.senha = undefined;
   
   // res.send({ usuario });
   res.redirect("/api/atividades")
});

module.exports = app => app.use('/login', router);