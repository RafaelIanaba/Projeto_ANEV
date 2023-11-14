const mongoose = require('./database')

const { Schema } = mongoose

const Clientes = new Schema({
    nome: {
        type: String,
        rquired: true
    },
    email: {
        type: String,
        rquired: true
    },
    telefone: {
        type: String,
        rquired: true
    },
    cpf: {
        type: String,
        rquired: true
    },
    endereço: {
        type: String,
        rquired: true
    },
    idade: Number,
    ativo: {
        type: Boolean,
        default: true
    }
})

const Cliente = mongoose.model('Clientes', Clientes)

module.exports = Cliente