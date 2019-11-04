const Usuario = require('../models/Usuario')

const mongoose = require ('../database');

//mongoose.connection.dropDatabase();

var usuarios = [
    new Usuario({
        email: 'test@nextem.com.br', 
        senha: '1234'
    })
];

for ( var i = 0 ; i < usuarios.length ; i++) {
    usuarios[i].save();
}


// mongoose.disconnect();