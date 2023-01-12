const mongoose = require("mongoose");


const dbConnection = async() => {
  
    try {
        
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_DB,() => {
            console.log("Base de datos online");
        });

        
    } catch (error) {

        console.log(error)
        throw new Error('Error a la hora de iniciar la base')
        
    }





}





module.exports = {
    dbConnection
}
