const express = require("express")

const app = express()
const {people} = require("./data")

app.use(express.static("./methodes-public"))

// parse form data
app.use(express.urlencoded({ extended: false}))

// parse coming json body
app.use(express.json())
//GET method
app.get("/api/people", (req, res) => {
    res.status(200).json({
        succes: true,
        data: people
    })
})

// POST
app.post("/login", (req, res) => {
    const {name} = req.body
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send("please provide the name")
})

app.post("/api/people", (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(401).json({
            succes: false,
            msg: "please provide the name"
        })
    }
    people.push({
        id: people.length +1,
        name: name
    })
    res.status(201).json({
        succes: true,
        data: people
    })
})

// Live server
app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
