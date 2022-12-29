const express = require("express")

const app = express()

app.get("/",(req, res) => {
    res.status(200).send("Home page")
})

app.get("/about",(req, res) => {
    res.status(200).send("About page")
})

//handle all HTTP requests
app.all("*", (req, res) => {
    res.status(404).send(
        `<h1 class="not-found"> 404 Not found </h1>
        <p> back to <a href="/"> Home page </a> </p>
    `)
})


app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
