const express = require("express")
const router = express.Router()

const { getPeople, addPerson, updatePerson, deletePerson } = require("../controllers/people")

/* //GET method
router.get("/", getPeople)

// POST
router.post("/", addPerson)

// PUT
router.put('/:id', updatePerson)

// DELETE
router.delete("/:id", deletePerson) */

// chain functions
router.route("/").get(getPeople).post(addPerson)
router.route("/:id").put(updatePerson).delete(deletePerson)

module.exports = router
