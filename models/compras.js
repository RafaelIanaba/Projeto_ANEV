const mongoose = require('./database')

const { Schema } = mongoose

const Compras = new Schema({
    id_cliente: {
        type: Number,
        rquired: true
    },
    id_produto: {
        type: Number,
        rquired: true
    },
    quantidade: Number,
    valor_total: Number,
    data: {
        type: String,
        rquired: true
    },
    ativo: {
        type: Boolean,
        default: false
    }
})

const Compra = mongoose.model('Compras', Compras)

module.exports = Compra