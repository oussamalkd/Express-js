const express = require("express")

const app = express()

const peopleRoutes = require("./routes/people")
const authRoutes = require("./routes/auth")

app.use(express.static("./methodes-public"))

// parse form data
app.use(express.urlencoded({ extended: false}))

// parse coming json body
app.use(express.json())

app.use("/api/people", peopleRoutes)
app.use("/api", authRoutes)




// Live server
app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
