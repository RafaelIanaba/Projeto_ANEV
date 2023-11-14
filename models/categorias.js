const mongoose = require('./database')

const { Schema } = mongoose

const Categorias = new Schema({
    nome: {
        type: String,
        rquired: true
    },
    ativo: {
        type: Boolean,
        default: true
    }
})

const Categoria = mongoose.model('Categorias', Categorias)

module.exports = Categoria