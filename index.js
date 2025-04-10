const express = require("express")
const app = express()
const path = require("path");
const mongoose = require('mongoose');

const Product = require("./models/product")

mongoose.connect('mongodb://127.0.0.1:27017/luna-llena-refactored')
    .then(() => {
        console.log("MONGO CONECTION OPEN")
    })
    .catch(err => {
        console.log("OH NO MONGO CONECTION ERROR")
        console.log(err)
    })

const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/productos", async (req, res) => {
    const products = await Product.find({})
    res.render("productos", { products })
})

// app.get("/productos/:id", async (req, res) => {
//     const { id } = req.params
//     const product = await Product.findById(id)
//     res.render("show", { product })
//     console.log(product)
// })

app.get("/nuevo-producto", (req, res) => {
    res.render("new-product")
})

app.get("/contacto", (req, res) => {
    res.render("contacto")
})

app.listen(port, () => {
    console.log("Running on port 3000!")
})

