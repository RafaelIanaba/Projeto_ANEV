const express = require("express")
const route = express.Router()

const Categorias =require("../models/categorias")

/*************************************************************************************************************** */

route.post("/", async (req, res) => {
    var recebido = req.body;

    var data = await Categorias.find(recebido);

    if (data.length === 0) {
        await Categorias.create(recebido);
        return res.send({ mensagem: "Categoria inserida com sucesso." });
    } else {
        return res.send({ error: "Essa categoria já foi inserida." });
    }
});

/************************************************************************************************************* */

route.get("/", async (req,res) => {
    var data = await Categorias.find()
    return res.send( data );
})

/************************************************************************************************************* */

route.put("/", async (req,res) => {
    var { id, nome } = req.body

    if (id == undefined)
        return res.send({ error: "Id não pode ser nulo."})


    try {
        await Categorias.findByIdAndUpdate(id, {nome}) 
        
        return res.send( {mensagem: "Categoria alterada com sucesso."} )
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
        await Categorias.findByIdAndDelete( id )
        
        return res.send( {mensagem: "Categoria deletada com sucesso."} )
    }  
    catch( err ) {
        return res.send({ error: "Id não encontrado." })
    }
})

/************************************************************************************************************* */

module.exports = app => app.use("/categorias", route)

