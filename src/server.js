const express = require("express")
const server = express()
const routes = require("./routes")

server.set('view engine', 'ejs')

server.use(express.static("public"))

//routes
server.use(routes)

server.listen(5000, () => console.log('Port 5000'))