const Usuario = require('../models/usuario');
const bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');



const usuariosGet = async(req,res)=>{
    
    const {limite = 5, desde = 0 } = req.query;
    const query = {estado:true}
    //const usuarios = await Usuario.find(query).skip(Number(desde)).limit(Number(limite));
    //const total = await Usuario.countDocuments(query);

    //Arreglo de promesas que se ejecutan al mismo modo
    const [total,usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query).skip(Number(desde)).limit(Number(limite)),

    ])

    res.json({
        total,
        ok:true,
        usuarios,
        
    })
};

const usuariosPost = async(req,res)=>{
    const {nombre,correo,password,rol} = req.body;
    //Creando instancia de un usuario en la base de datos
    const usuario = new Usuario({nombre,correo,password,rol});
    //verificar correo electronico
    
    //Encriptar la contrasena
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt)

    //guardar en db
    await usuario.save();
    //respuesta
    res.json({
        usuario,
    })
};

const usuariosPut = async (req,res)=>{
    const {id} = req.params;
    const {_id,password,google,...resto} = req.body;
    

    //TODO Validar contra base de datos 

    
    if (password) {
        //Encriptar password 
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt)
        
    }
    
    const usuario = await Usuario.findByIdAndUpdate(id,resto);
    
    res.json({
        ok:true,
        msg:"put Api - controller",
        id,
        usuario
        
    })
};

const usuariosDelete = async(req,res)=>{

    const {id} = req.params;
    const query = {estado:false}

    const deleteUser = await Usuario.findByIdAndUpdate(id,query);
    
    res.json({
        deleteUser
    })
}





module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}