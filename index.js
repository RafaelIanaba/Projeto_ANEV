const express = require('express')
const app = express()
//const middleware = require("./middleware")

app.use(express.json())

require("./routes/login")(app) 
require("./routes/produtos")(app)
require("./routes/produtosLista")(app)
require("./routes/categorias")(app)
require("./routes/clientes")(app)
require("./routes/compras")(app)
require("./routes/comprasCliente")(app)


app.listen( 3001 , function() {  
    console.log("Servidor ligado")
} ) 