const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.status(200).json([
        {
            id: 1,
            name: "Oussama",
            last_name: "Louelkadi"
        },
        {
            id: 2,
            name: "Louelkadi",
            last_name: "Oussama"
        }
    ])
})



app.listen(2405, () => {
    console.log("App runing on http://localhost:2405");
})
