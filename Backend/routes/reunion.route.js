const reunionCtrl= require('./../controllers/reunion.controller');

const express = require('express');
const router = express.Router();

router.post('/', reunionCtrl.createReunion);
router.get('/', reunionCtrl.getReuniones);
router.delete('/:id', reunionCtrl.deleteReunion);
router.put('/:id', reunionCtrl.editReunion);
router.get('/:id', reunionCtrl.getReunionId);
router.get('/participante/:participantes', reunionCtrl.getReunionParticipante);
router.get('/noparticipante/:participantes', reunionCtrl.getReunionNoParticipante);
router.get('/fecha', reunionCtrl.getReunionPorDiaMes);
router.get('/oficina/nroOficina/', reunionCtrl.getReunionOficina);


module.exports = router;