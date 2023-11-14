const express = require("express")
const route = express.Router()

const Produtos =require("../models/produtos")

/*************************************************************************************************************** */

route.post("/", async (req,res) => {
    var recebido = req.body
    await Produtos.create( recebido )
    return res.send({ mensagem: "Produto inserido com sucesso." });
})

/************************************************************************************************************* */

route.get("/", async (req,res) => {
    var data = await Produtos.find()
    return res.send( data );
})

/************************************************************************************************************* */

route.put("/", async (req,res) => {
    var { id, nome, categoria, valor, peso, data_validade } = req.body

    if (id == undefined)
        return res.send({ error: "Id não pode ser nulo."})


    try {
        await Produtos.findByIdAndUpdate(id, {nome, categoria, valor, peso, data_validade}) 
        
        return res.send( {mensagem: "Produto alterado com sucesso."} )
    }  
    catch( err ) {
        return res.send({ error: "Id não encontrado." })
    }
})

/************************************************************************************************************* */


route.delete("/", async (req,res) => {
    var {id} = req.body

    if (id == undefined)
        return res.send({ error: "Id não pode ser nulo."})


    try {
        await Produtos.findByIdAndDelete( id )
        
        return res.send( {mensagem: "Produto deletado com sucesso."} )
    }  
    catch( err ) {
        return res.send({ error: "Id não encontrado." })
    }
})

/************************************************************************************************************* */

module.exports = app => app.use("/produtos", route)

