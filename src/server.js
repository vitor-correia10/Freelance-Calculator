const express = require("express")
const server = express()
const routes = require("./routes")

server.set('view engine', 'ejs')

server.use(express.static("public"))

//use req.body
server.use(express.urlencoded({extended: true}))

//routes
server.use(routes)

server.listen(5000, () => console.log('Port 5000'))