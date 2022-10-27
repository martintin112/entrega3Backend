const express = require('express');
const Contenedor = require('./Contenedor');
const app = express();
const PORT = process.env.PORT || 8080;

const contenedor = new Contenedor('productos');

app.get('/', (req, res) => {
    res.send("<a href='/productos'>Total de productos</a> <a href='/productoRandom'>Producto al azar</a>")
});

app.get('/productos', async (req, res) => {
    const productos = await contenedor.getAll();

    res.send(productos);
})

app.get('/productoRandom', async (req, res) => {
    const idMin = 1;
    const idMax = 3;
    const randomId = Math.floor(Math.random() * (idMax - idMin + 1) + idMin);
    const producto = await contenedor.getById(randomId);

    res.send(producto);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
})
