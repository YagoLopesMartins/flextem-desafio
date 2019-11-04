const Atividade = require('../models/Atividade')

const mongoose = require ('../database');

// mongoose.connection.dropDatabase();

Atividade.create({ titulo: 'teste' , 
                    descricao: 'teste', 
                    responsavel: 'teste',  
                    status: 'teste', 
                    deadline: '04/11/19'});

// mongoose.disconnect();