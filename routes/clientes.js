const express = require("express")
const route = express.Router()

const Clientes =require("../models/clientes")

/*************************************************************************************************************** */

route.post("/", async (req, res) => {
    var recebido = req.body;

    var data = await Clientes.find(recebido);

    if (data.length === 0) {
        await Clientes.create(recebido);
        return res.send({ mensagem: "Cliente inserido com sucesso." });
    } else {
        return res.send({ error: "Esse cliente já foi inserido." });
    }
});

/************************************************************************************************************* */

route.get("/", async (req,res) => {
    var data = await Clientes.find()
    return res.send( data );
})

/************************************************************************************************************* */

route.put("/", async (req,res) => {
    var { id, nome, email, telefone, cpf, endereço, idade } = req.body

    if (id == undefined)
        return res.send({ error: "Id não pode ser nulo."})


    try {
        await Clientes.findByIdAndUpdate(id, {nome, email, telefone, cpf, endereço, idade}) 
        
        return res.send( {mensagem: "Cliente alterado com sucesso."} )
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
        await Clientes.findByIdAndDelete( id )
        
        return res.send( {mensagem: "Cliente deletado com sucesso."} )
    }  
    catch( err ) {
        return res.send({ error: "Id não encontrado." })
    }
})

/************************************************************************************************************* */

module.exports = app => app.use("/clientes", route)

