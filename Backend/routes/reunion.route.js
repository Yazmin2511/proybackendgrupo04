const reunionCtrl= require('./../controllers/reunion.controller');

const autCtrl = require('./../controllers/auth.controller');

const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de reuniones

router.post('/',reunionCtrl.createReunion);
router.get('/', reunionCtrl.getReuniones);
router.delete('/:id', reunionCtrl.deleteReunion);
router.put('/:id', reunionCtrl.editReunion);
router.get('/:id', reunionCtrl.getReunionId);
router.get('/participante/:participantes', reunionCtrl.getReunionParticipante);
router.get('/participante/participantes/:legajo', reunionCtrl.getReunionLegajoEmpledo);
router.get('/noparticipante/:participantes', reunionCtrl.getReunionNoParticipante);
router.get('/oficina/nroOficina/', reunionCtrl.getReunionOficina);
router.get('/dias/dia/', reunionCtrl.getReunionDias);
//,autCtrl.verifyToken

//exportamos el modulo de rutas
module.exports = router;