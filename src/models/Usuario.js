const mongoose = require ('../database');

const UsuarioSchema = new mongoose.Schema({
    email:{
      type: String,
      required: true
    },
    senha:{ 
      type: String,
      required: true
    }
 })

 const Usuario = mongoose.model("Usuario", UsuarioSchema)

 module.exports = Usuario