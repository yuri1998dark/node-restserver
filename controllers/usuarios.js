const usuariosGet = (req,res)=>{
    res.json({
        ok:true,
        msg:"get Api - controller"
    })
};

const usuariosPost = (req,res)=>{
    const {nombre,edad} = req.body;

    res.json({
       msg:'post API - usuariosPost',
       nombre,
       edad
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