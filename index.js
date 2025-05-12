const express = require('express')
const cors = require('cors')
const path = require('path')
const connectDB = require('./config/config-db')
const Product = require('./models/model-product')


require('dotenv').config()

const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/api/test-create', async (req, res) => {
    try {
        const newProduct = new Product({
            name: 'Medallón Mix',
            price: 1.99,
            description: 'Variedad de medallones'
        })

        const savedProduct = await newProduct.save()
        res.json(savedProduct)
    } catch (error) {
        console.error('Error al guardar el producto:', error)
        res.status(500).json({ error: 'Error al guardar el producto' })
    }
})

app.get('/api/create-many', async (req, res) => {
    try {
        const products = [
            { name: 'Granola Artesanal', price: 5.99, description: 'Granola casera sin azúcar' },
            { name: 'Pan Integral', price: 3.50, description: 'Pan de semillas, integral 100%' },
            { name: 'Queso Vegano', price: 4.80, description: 'Queso vegetal tipo untable' },
            { name: 'Milanesas de Seitan', price: 6.30, description: 'Ricas y nutritivas' },
            { name: 'Prepizza Vegana', price: 3.90, description: 'Base de pizza sin lácteos' },
            { name: 'Medallones Mix', price: 4.20, description: 'Mix de legumbres y vegetales' }
        ];

        const result = await Product.insertMany(products);
        res.json(result);

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al insertar productos' })
    }
})

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})