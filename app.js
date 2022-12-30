const express = require("express")

const app = express()

const logger = require("./middleware/logger")

app.use("/api",logger)

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/about", (req, res) => {
    res.send("About Page")
})

app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
