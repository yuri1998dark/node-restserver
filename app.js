

require('dotenv').config()
const Server = require('./models/server')




const server = new Server();

//me quede por validar rol contra base de datos

server.listen();



