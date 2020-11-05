const express = require("express")
var cors = require("cors");
const session = require("express-session");
const router = require("./routers/routers")
const welcome = require("./routers/welcome")
const server = express()
server.use(express.json());
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "string"
}))
server.use(cors());
server.use("/api", router);
server.use("/", welcome)

module.exports = server;