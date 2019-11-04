const mongoose = require ('../database');

const StatusSchema = new mongoose.Schema({
    nome:{
      type: String,
      required: true
    }
})

const Status = mongoose.model("Status", StatusSchema)

module.exports = Status