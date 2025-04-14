const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    tipoProducto: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    sabor: {
        type: String,
        enum: ["Calabaza", "Mijo y curry", "Lentejas", "Mix-vegetales", "Remolacha","Arvejas"]
    },
    img: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Product", productSchema) 