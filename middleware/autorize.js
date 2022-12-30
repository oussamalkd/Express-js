const authorize  = (req, res, next) => {
    const { user } = req.query
    if(user === "oussama") {
        req.user = {name: "oussama", id:2405}
        next()
    } else {
        res.status(401).send("Unauthorized")
    }
}
module.exports = authorize
