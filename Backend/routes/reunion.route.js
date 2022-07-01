const reunionCtrl= require('./../controllers/reunion.controller');

const autCtrl = require('./../controllers/auth.controller');

const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de reuniones

router.post('/',reunionCtrl.createReunion);
router.get('/', reunionCtrl.getReuniones);
router.delete('/:id',autCtrl.verifyToken, reunionCtrl.deleteReunion);
router.put('/:id', reunionCtrl.editReunion);
router.get('/:id', reunionCtrl.getReunionId);
router.get('/participante/:participantes',autCtrl.verifyToken, reunionCtrl.getReunionParticipante);
router.get('/noparticipante/:participantes',autCtrl.verifyToken, reunionCtrl.getReunionNoParticipante);
router.get('/fecha',autCtrl.verifyToken, reunionCtrl.getReunionPorDiaMes);
router.get('/oficina/nroOficina/',autCtrl.verifyToken, reunionCtrl.getReunionOficina);


//exportamos el modulo de rutas
module.exports = router;