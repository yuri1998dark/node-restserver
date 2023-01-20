
const Role = require('../models/role');
const Usuario = require('../models/usuario')


const esRolevalido = async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error( `El rol ${rol} no esta en la base de datos`)
         
    }

}

const validarvsCorreo = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
       throw new Error(`Este correo ya esta registrado`)
    }
}

const exiteIdEnDb = async (id) => {
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
       throw new Error(`El id ${id} no esta en la BD `)
    }
}



module.exports = {
    esRolevalido,
    validarvsCorreo,
    exiteIdEnDb
}