const express = require("express")

const app = express()

const { products } = require("./data")

app.get("/", (req, res) => {
    res.status(200).send(`
    <h1> Home Page </h1>
    <a class="link" href="api/products"> Products </a>
    `)
})

app.get('/api/products', (req, res) => {
    const allProducts = products.map(product => {
        const { id, name, image, price} = product
        return { id,name, image, price}
    })
    res.status(200).json(allProducts)
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(product => product.id === Number(id))
    if(product === undefined) {
        res.status(404).send("not found")
    } else {
        res.status(200).json(product)
    }
})



app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
