const express = require('express');
const recursoCtrl = require('./../controllers/recurso.controller');
const autCtrl = require('./../controllers/auth.controller');

const router = express.Router();

router.post('/',autCtrl.verifyToken,recursoCtrl.crearRecurso);
router.get('/',autCtrl.verifyToken,recursoCtrl.getRecursos);
router.delete('/:id',autCtrl.verifyToken,recursoCtrl.deleteRecurso);
router.put('/:id',autCtrl.verifyToken,recursoCtrl.editRecurso);
router.get('/:id',autCtrl.verifyToken,recursoCtrl.getRecursosId);
router.get('/tipo/:tipo',autCtrl.verifyToken,recursoCtrl.getRecursoxTipo);

module.exports = router;