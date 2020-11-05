const express = require("express")

const welcome = express.Router()

welcome.get("/", (req, res, next) => {
    res.json({
        message: "Welcome",
    })
})

module.exports = welcome