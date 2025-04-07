const express = require("express")

const app = express()

const port = process.env.PORT || 3000

app.set("view engine", "ejs")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/productos", (req, res) => {
    res.render("productos")
})

app.get("/contacto", (req, res) => {
    res.render("contacto")
})

app.listen(port, () => {
    console.log("Running on port 3000!")
})

