//Rutas relacionadas a los usuarios 

const {Router} = require('express');
const { usuariosGet, 
        usuariosDelete, 
        usuariosPost, 
        usuariosPut} = require('../controllers/usuarios');

const router = Router();

router.get('/',usuariosGet);
router.post('/',usuariosPost);
router.delete('/',usuariosDelete);
router.put('/',usuariosPut)

router.get('*',(req,res) => {
    res.send('Error 404')
});


module.exports = router;