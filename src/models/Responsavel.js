const mongoose = require ('../database');

const ResponsavelSchema = new mongoose.Schema({
    nome:{
      type: String,
      required: true
    }
 })

 const Responsavel = mongoose.model("Responsavel", ResponsavelSchema)

 module.exports = Responsavel