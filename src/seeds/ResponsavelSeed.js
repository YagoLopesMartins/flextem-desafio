const Responsavel = require('../models/Responsavel')

const mongoose = require ('../database');

// mongoose.connection.dropDatabase();

Responsavel.create({ nome: 'Holden Offmenn' });
Responsavel.create({ nome: 'Natanael' });
Responsavel.create({ nome: 'Yago Martins' });
Responsavel.create({ nome: 'Romário Silva' });

// mongoose.disconnect();