const mongoose = require ('../database');

const AtividadeSchema = new mongoose.Schema({
    titulo:{
      type: String,
      required: true
    },
    descricao:{ 
      type: String,
      required: true
    },
    responsavel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Responsavel",
      required: true
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status",
      required: true
    },
    /*
      responsavel:{
        type: String,
        required: true
      },
      status:{ 
        type: String,
        required: true
      },
   */
    deadline:{
        type: Date,
        default: Date.now()
    }
 })

 const Atividade = mongoose.model("Atividade", AtividadeSchema)

 module.exports = Atividade