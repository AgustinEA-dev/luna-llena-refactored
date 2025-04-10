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
        enum: ["Calabaza", "Mijo y curry", "Lentejas", "Mix-vegetales", "Remolacha"]
    }

})

module.exports = mongoose.model("Product", productSchema) 