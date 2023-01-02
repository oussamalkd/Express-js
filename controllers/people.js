let {people} = require("../data")

const getPeople = (req, res) => {
    res.status(200).json({
        succes: true,
        data: people
    })
}

const addPerson = (req, res) => {
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
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
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
}

module.exports = {
    getPeople,
    addPerson,
    updatePerson,
    deletePerson
}
