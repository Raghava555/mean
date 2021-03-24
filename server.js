const app = require("./backend/app")
const http = require('http');


app.set('PORT',8000)
const server = http.createServer(app)

server.listen(app)