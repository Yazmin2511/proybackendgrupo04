

//exportamos el modulo de rutas

const reunionCtrl= require('./../controllers/reunion.controller');

const autCtrl = require('./../controllers/auth.controller');

const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de reuniones

router.post('/',autCtrl.verifyToken,reunionCtrl.createReunion);
router.get('/',autCtrl.verifyToken, reunionCtrl.getReuniones);
router.delete('/:id',autCtrl.verifyToken, reunionCtrl.deleteReunion);
router.put('/:id',autCtrl.verifyToken, reunionCtrl.editReunion);
router.get('/:id',autCtrl.verifyToken, reunionCtrl.getReunionId);
router.get('/participante/:participantes',autCtrl.verifyToken, reunionCtrl.getReunionParticipante);
router.get('/participante/participantes/:legajo',autCtrl.verifyToken, reunionCtrl.getReunionLegajoEmpledo);
router.get('/noparticipante/:participantes',autCtrl.verifyToken, reunionCtrl.getReunionNoParticipante);
router.get('/oficina/nroOficina/',autCtrl.verifyToken, reunionCtrl.getReunionOficina);
router.get('/dias/dia/',autCtrl.verifyToken, reunionCtrl.getReunionDias);
router.get('/participantes/legajo/:legajo',autCtrl.verifyToken, reunionCtrl.getReunionLegajoEmpledo);
//,autCtrl.verifyToken

//exportamos el modulo de rutas

module.exports = router;