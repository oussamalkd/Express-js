const express = require("express")
const router = express.Router()
const login = require("../controllers/auth")

// POST
router.post("/login", login)

module.exports = router
