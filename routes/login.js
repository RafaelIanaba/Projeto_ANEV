const express = require("express")
const route = express.Router()
const jwt = require("jsonwebtoken")

require('dotenv/config')

const Usuario = require('../models/usuario')

/************************************************************************************************************* */


route.post("/validar", async (req,res) => {
    const { email, senha } = req.body

    if(!email)
        return res.send({ msg: "Campo e-mail é obrigatório"})

    if(!senha)
        return res.send({ msg: "Campo senha é obrigatório"})

    var usuario = await Usuario.findOne({ email })

    if(!usuario)
        return res.send({ msg: "Usuário ou senha inválido"})

    if(usuario.senha != senha)
        return res.send({ msg: "Usuário ou senha inválido"})

    //1
    var dados = {
        id: usuario.id,
        email: usuario.email
    }

    //2
    var chave = process.env.TOKEN_KEY
    
    //3
    var tempo = { expiresIn: 60 * 1000 }  //1 minuto

    var token = await jwt.sign(dados, chave, tempo)

    return res.send({ token })

})

/************************************************************************************************************* */


route.post("/registrar", async (req,res) => {
    const { email, senha } = req.body

    if(!email)
        return res.send({ msg: "Campo e-mail é obrigatório"})

    if(!senha)
        return res.send({ msg: "Campo senha é obrigatório"})

    var data = await Usuario.find({email: email});

    if (data.length === 0) {
        var usuario = await Usuario.create({ email, senha })
        return res.send( usuario )
    } else {
        return res.send({ error: "Esse usuário já foi inserido." });   
    }
})


module.exports = app => app.use("/login", route)