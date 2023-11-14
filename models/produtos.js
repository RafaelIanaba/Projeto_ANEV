const mongoose = require('./database')

const { Schema } = mongoose

const Produtos = new Schema({
    nome: {
        type: String,
        rquired: true
    },
    categoria: {
        type: String,
        rquired: true
    },
    valor: Number,
    peso: Number,
    data_validade: {
        type: String,
        rquired: true
    },
    ativo: {
        type: Boolean,
        default: true
    }
})


const Produto = mongoose.model('Produtos', Produtos)

module.exports = Produto