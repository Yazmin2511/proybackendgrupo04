const Reunion = require('../models/reunion');
const reunionCtrl = {}

reunionCtrl.createReunion = async (req,res) => {
    var reunion = new Reunion(req.body);
    try{
        await reunion.save();
        res.json({
            'status':'1',
            'msg':'Reunion guardada.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando operacion.'
        })
    }
}

reunionCtrl.getReuniones = async (req,res) => {
    const reuniones = await Reunion.find().populate('recursos','participantes').exec();
    res.json(reuniones);
}

reunionCtrl.deleteReunion  = async (req,res) => {
    try{
        await Reunion.deleteOne({_id: req.params.id});
        res.json({
            'status':'1',
            'msg':'Pasaje deleted.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando la operacion.'
        })
    }
}

reunionCtrl.editReunion = async (req,res) => {
    const vreunion = new Reunion(req.body);
    try {
        await Reunion.updateOne({_id: req.body}, vreunion)
        res.json({
            'status':'1',
            'msg':'Reunion updated.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando la operacion.'
        })
    }
}

reunionCtrl.getReunionId = async (req,res) => {
    const reunion = await Reunion.findById(req.params.id).populate('recursos','participantes').exec();
    res.json(reunion)
}


// get reunion x != participante

// reunion por dia , mes o

module.exports = reunionCtrl;