const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/flextem', {
      // useMongoClient: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
   })
   .then(() =>{
      console.log('Conectado ao MongoDB !');
   })
   .catch((err)=>{
      console.log('Erro ao conectar: '+err);
})

module.exports = mongoose;

