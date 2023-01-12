const express = require("express"); 
const { dbConnection } = require("../database/config");


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        //conectar a la base de datos
    
        this.conectarDB()

        this.middlewares()
        
        //rutas de mi aplicacion
        this.routes()
        
    
    }

    async conectarDB(){
        await dbConnection()
    }
     

    middlewares(){
        
        //Parseo y lectura del body
       
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
        
        
        
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
     
    }

     listen() {
        this.app.listen(this.port,() => {
            console.log(`Server running on port ${this.port}`);
        });
    

    } 

    
}



module.exports = Server;