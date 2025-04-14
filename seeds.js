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
        sabor: "Calabaza",
        img: "/imgs/products-imgs/medallon-calabaza.webp"
    },
    {
        tipoProducto: "Medallón",
        precio: 300,
        sabor: "Mijo y curry",
        img: "/imgs/products-imgs/medallon-mijo-curry.webp"
    },
    {
        tipoProducto: "Medallón",
        precio: 300,
        sabor: "Arvejas",
        img: "/imgs/products-imgs/medallon-arvejas.webp"
    },
    {
        tipoProducto: "Medallón",
        precio: 300,
        sabor: "Remolacha",
        img: "/imgs/products-imgs/medallon-remolacha.webp"
    },
    {
        tipoProducto: "Medallón",
        precio: 300,
        sabor: "Mix-vegetales",
        img: "/imgs/products-imgs/medallon-mix.webp"
    },
]

Product.insertMany(seedsProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

