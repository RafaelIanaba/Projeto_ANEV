const mongoose = require('./database')
const { Schema } = mongoose
const Usuarios = new Schema({
    email: {
        type: String,
        rquired: true
    },
    senha: String,
})
const Usuario = mongoose.model('Usuario', Usuarios)
module.exports = Usuario