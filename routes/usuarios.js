//Rutas relacionadas a los usuarios 

const {Router} = require('express');


const { check} = require('express-validator');
const { usuariosGet, 
        usuariosDelete, 
        usuariosPost, 
        usuariosPut} = require('../controllers/usuarios');
const { esRolevalido, validarvsCorreo, exiteIdEnDb } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/',usuariosGet);
router.post('/',[
    check('nombre','El campo nombre no puede estar vacio').not().isEmpty(),
    check('password','El password debe contener mas de 6 letras').isLength({min:6}),
    check('correo','EL campo correo tiene que ser valido').isEmail(),
    check('correo').custom(validarvsCorreo),
    //check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE ']),
    check('rol').custom(esRolevalido),
    validarCampos
],usuariosPost);
router.delete('/',usuariosDelete);
router.put('/:id',[
    check('id','El id no es valido').isMongoId(),
    check('id').custom(exiteIdEnDb),
    check('correo').custom(validarvsCorreo),
    check('rol').custom(esRolevalido),
    validarCampos
]
,usuariosPut)

router.get('*',(req,res) => {
    res.send('Error 404')
});


module.exports = router;    