const Usuario = require ('./../models/usuario')
//implemento del  manejador del token
const jwt = require('jsonwebtoken');

const usuarioCtrl = {}

usuarioCtrl.createUsuario = async (req, res)=>{
    //en req.body se espera que vengan los datos de usuario a crear
    const usuario = new Usuario (req.body);
    try {
        await usuario.save();
        res.status(200).json({
        'status': '1',
        'msg': 'Usuario guardado.'
        })
    } catch (error) {
        res. status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'
        })
        }
   }
usuarioCtrl.loginUsuario = async (req, res)=>{
    //en req.body se espera que vengan las credenciales de login
    //defino los criterios de busqueda en base al username y password recibidos
    const criteria = {
        username: req.body.username,
        password: req.body.password
    }
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    Usuario.findOne(criteria, function(err, user) {  
        //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                msg: 'error'})
        };
        if (!user) {
            res.json({
                status: 0,
                msg: "not found" })
        } else {
            //preparo un token para ser enviado en caso de loguin correcto
            const unToken = jwt.sign({id: user._id}, "secretkey");
        res.json({
            status: 1,
            msg: "success",
            username: user.username, //retorno información útil para el frontend
            perfil: user.perfil, //retorno información útil para el frontend
            userid: user._id, //retorno información útil para el frontend
            token: unToken

        })//)
    };//};
   })
}

usuarioCtrl.getUsuarios = async (req, res) =>{
    var usuarios = await Usuario.find();
    res.json(usuarios);
}
//exportacion del modulo controlador
module.exports= usuarioCtrl;
