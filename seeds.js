const mongoose = require("mongoose");
const Product = require("./models/product")

mongoose.connect('mongodb://127.0.0.1:27017/luna-llena-refactored')
    .then(() => {
        console.log("MONGO CONECTION OPEN")
    })
    .catch(err => {
        console.log("OH NO MONGO CONECTION ERROR")
        console.log(err)
    })

const seedsProducts = [
    {
        tipoProducto: "Medallón",
        precio: 300,
        sabor: "Calabaza"
    },
    {
        tipoProducto: "Medallón",
        precio: 300,
        sabor: "Mijo y curry"
    },
    {
        tipoProducto: "Medallón",
        precio: 300,
        sabor: "Lentejas"
    },
    {
        tipoProducto: "Medallón",
        precio: 300,
        sabor: "Remolacha"
    },
    {
        tipoProducto: "Medallón",
        precio: 300,
        sabor: "Mix-vegetales"
    },
]

Product.insertMany(seedsProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

