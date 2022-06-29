const express = require('express');
const recursoCtrl = require('./../controllers/recurso.controller');

const router = express.Router();

router.post('/',recursoCtrl.crearRecurso);
router.get('/',recursoCtrl.getRecursos);
router.delete('/:id',recursoCtrl.deleteRecurso);
router.put('/:id',recursoCtrl.editRecurso);
router.get('/:id',recursoCtrl.getRecursosId);
router.get('/tipo/:tipo',recursoCtrl.getRecursoxTipo);

module.exports = router;