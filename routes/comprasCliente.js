const express = require("express")
const route = express.Router()

const Compras =require("../models/compras")

/*************************************************************************************************************** */

route.post("/", async (req,res) => {
    var recebido = req.body
    await Compras.create( recebido )
    return res.send({ mensagem: "Compra inserida com sucesso." });
})

/************************************************************************************************************* */

route.get("/", async (req,res) => {
    var { id_cliente } = req.body

    if (!id_cliente)
        return res.send({ error: "Id do cliente não pode ser nulo"})

    var data = await Compras.find({id_cliente});
    
    return res.send( data );   
})

/************************************************************************************************************* */

route.put("/", async (req,res) => {
    var { id, id_cliente, id_produto, quantidade, valor_total, data, ativo } = req.body

    if (id == undefined)
        return res.send({ error: "Id não pode ser nulo"})

    if (ativo == false) {
        try {
            await Compras.findByIdAndUpdate(id, {id_cliente, id_produto, quantidade, valor_total, data}) 
            
            return res.send( {mensagem: "Compra alterada com sucesso."} )
        }  
        catch( err ) {
            return res.send({ error: "Id não encontrado" })
        }
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

module.exports = app => app.use("/comprasCliente", route)

