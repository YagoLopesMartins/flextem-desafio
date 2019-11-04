const Status = require('../models/Status')

const mongoose = require ('../database');

// mongoose.connection.dropDatabase();

Status.create({ nome: 'WIP' });
Status.create({ nome: 'To Do' });
Status.create({ nome: 'Done' });
Status.create({ nome: 'Review' });

// mongoose.disconnect();