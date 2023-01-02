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

// PUT
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    
    const person = people.find((person) => person.id === Number(id))
    if(!person) {
        return res
            .status(404)
            .json({
                succes: false,
                message: `there is no person with following id ${id}`
            })
    }

    const updatedPoeple = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({
        succes: true,
        data: updatedPoeple
    })
})

// DALETE
app.delete("/api/people/:id", (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person) {
        return res
            .status(404)
            .json({
                succes: false,
                message: `There is no person with the following id: ${req.params.id}`
            })
    }

    const updatedPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({success: true, data: updatedPeople})
})

// Live server
app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
