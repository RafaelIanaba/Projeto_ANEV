const mongoose = require("mongoose")

try {
    const uri = "mongodb+srv://ianabarafa1:paimae03@cluster0.0wldpdc.mongodb.net/loja_pets"
    mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}
catch (err) {
    console.log(err)
}

mongoose.Promise = global.Promise

module.exports = mongoose