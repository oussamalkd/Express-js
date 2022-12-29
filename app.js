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
    const { search, limit} = req.query

    if(!search && !limit) {
        const allProducts = products.map(product => {
            const { id, name, image, price} = product
            return { id,name, image, price}
        })
        res.status(200).json(allProducts)
    } else {
        //query string
        let filterProducts = [...products]
        if(search) {
            filterProducts = filterProducts.filter((product) => {
                return product.name.startsWith(search)
            })
        }
        // get just the limit
        if(limit) {
            filterProducts = filterProducts.slice(0,Number(limit))
        }
    
        res.status(200).json(filterProducts)
    }
})
//router param
app.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(product => product.id === Number(id))
    if(product === undefined) {
        res.status(404).send("not found")
    } else {
        res.status(200).json(product)
    }
})

// query string
app.get("/api/v1/products", (req, res) => {
    let filterProducts = [...products]
    const { search, limit } = req.query
    // get all products that started with the query
    if(search) {
        filterProducts = filterProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    // get just the limit
    if(limit) {
        filterProducts = filterProducts.slice(0,Number(limit))
    }

    res.status(200).json(filterProducts)
})

app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
