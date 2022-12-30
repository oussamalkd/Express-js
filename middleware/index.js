const express = require("express")

const app = express()

const morgan = require("morgan")

const logger = require("./middleware/logger")
const authorize = require("./middleware/autorize")

/* app.use([logger, authorize]) */

app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/about", [logger, authorize], (req, res) => {
    console.log(req.user);
    res.status(200).json(req.user)
})

app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
