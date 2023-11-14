const express = require("express")
const route = express.Router()

const Produtos =require("../models/produtos")


route.get("/", async (req,res) => {
    var data = await Produtos.find()
    return res.send( data );
})


module.exports = app => app.use("/produtosLista", route)

