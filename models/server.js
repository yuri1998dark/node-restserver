const express = require("express") 


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        
        this.middlewares()
        
        //rutas de mi aplicacion
        this.routes()
        
    
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