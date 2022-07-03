const Recurso = require('../models/recurso');
const recursoCtrl = {}

recursoCtrl.crearRecurso = async(req,res) => {
    var recurso = new Recurso(req.body);
    try {
        await recurso.save();
        res.json({
            'status':'1',
            'msg':'Recurso guardado.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando operacion.'
        })
    }
}

recursoCtrl.getRecursos = async (req,res) => {
    const recursos = await Recurso.find();
    res.json(recursos);
}

recursoCtrl.deleteRecurso = async (req,res) => {
    try {
        await Recurso.deleteOne({_id: req.params.id});
        res.json({
            'status':'1',
            'msg':'Recurso eliminado.' 
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando la operacion.'
        })
    }
}

recursoCtrl.editRecurso = async (req,res) => {
    const vrecurso = new Recurso(req.body);
    try {
        await Recurso.updateOne({_id: req.body}, vrecurso)
        res.json({
            'status':'1',
            'msg':'Recurso updated.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando la operacion.'
        })
    }
}

recursoCtrl.getRecursosId = async(req,res) => {
    const recurso = await Recurso.findById(req.params.id);
    res.json(recurso);
}


recursoCtrl.getRecursoxTipo = async(req,res) => {
    const recurso = await Recurso.find(req.params);
    res.json(recurso);
}

module.exports = recursoCtrl;