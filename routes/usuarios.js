//Rutas relacionadas a los usuarios 

const {Router} = require('express');
const { check } = require('express-validator');
const { usuariosGet, 
        usuariosDelete, 
        usuariosPost, 
        usuariosPut} = require('../controllers/usuarios');

const router = Router();



router.get('/',usuariosGet);
router.post('/',[
    check('correo','El correo no es valido').isEmail(),
    check('nombre','El nombre es obligatoriooooo').not().isEmpty()
],usuariosPost);
router.delete('/',usuariosDelete);
router.put('/',usuariosPut)

router.get('*',(req,res) => {
    res.send('Error 404')
});


module.exports = router;    