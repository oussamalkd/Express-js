const express = require("express")

const app = express()

const {people} = require("./data")

app.get("/api/people", (req, res) => {
    res.status(200).json({
        succes: true,
        data: people
    })
})

app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
