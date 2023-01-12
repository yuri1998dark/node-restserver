const Usuario = require('../models/usuario');
const bcryptjs = require("bcryptjs");


const usuariosGet = (req,res)=>{
    res.json({
        ok:true,
        msg:"get Api - controller"
    })
};

const usuariosPost = async(req,res)=>{
    const {nombre,correo,password,rol} = req.body
    const usuario = new Usuario({nombre,correo,password,rol});
    //console.log(usuario);
    //verificar correo electronico
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        return res.status(400).json({
            msg:'El correo ya esta registrado'
        })
    }


    //Encriptar la contrasena
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt)

    //guardar en db
    await usuario.save();

    res.json({
        usuario,
    })
};

const usuariosPut = (req,res)=>{
    res.json({
        ok:true,
        msg:"put Api - controller"
    })
};

const usuariosDelete = (req,res)=>{
    res.json({
        ok:true,
        msg:"delete Api - controller"
    })
}





module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}