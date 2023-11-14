const express = require("express")
const route = express.Router()

const Compras =require("../models/compras")

/************************************************************************************************************* */

route.get("/", async (req,res) => {
    var data = await Compras.find()
    return res.send( data );
})

/************************************************************************************************************* */

route.put("/", async (req,res) => {
    var { id, id_cliente, id_produto, quantidade, valor_total, data, ativo } = req.body

    if (id == undefined)
        return res.send({ error: "Id não pode ser nulo"})


    try {
        await Compras.findByIdAndUpdate(id, {id_cliente, id_produto, quantidade, valor_total, data, ativo}) 
        
        return res.send( {mensagem: "Compra alterada com sucesso."} )
    }  
    catch( err ) {
        return res.send({ error: "Id não encontrado" })
    }
})

/************************************************************************************************************* */


route.delete("/", async (req,res) => {
    var {id} = req.body

    if (id == undefined)
        return res.send({ error: "Id não pode ser nulo"})


    try {
        await Compras.findByIdAndRemove( id )
        
        return res.send( {mensagem: "Compra deletada com sucesso."} )
    }  
    catch( err ) {
        return res.send({ error: "Id não encontrado" })
    }
})

/************************************************************************************************************* */

module.exports = app => app.use("/compras", route)

