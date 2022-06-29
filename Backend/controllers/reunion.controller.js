const Reunion = require('../models/reunion');
const Empleado = require('../models/empleado');
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
    const reuniones = await Reunion.find().populate("participantes").exec();
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
    const reunion = await Reunion.findById(req.params.id).populate('participantes').exec();
    res.json(reunion)
}

reunionCtrl.getReunionParticipante = async (req,res) => {
    const reuniones = await Reunion.find(req.params).populate("participantes").exec();
    res.json(reuniones);
}

// get reunion x !participante
reunionCtrl.getReunionNoParticipante = async (req,res) => {
    const reunion = await Reunion.find();//.populate('participantes').exec(); 
    /* console.log(reunion.filter((p) =>  p.participantes != req.params.participantes  )); */
    //const reuniones = reunion.filter((p) =>  p.participantes != req.params.participantes  );

    res.json(reunion.filter((p) =>  p.participantes != req.params.participantes  ));    
}


reunionCtrl.getReunionPorDiaMes = async (req,res) => {
    var criteria={};
    if(req.query.dia!=null && req.query.dia!=""){
      criteria.dia = { $regex: req.query.dia, $options: "i" }};
    if(req.query.mes!=null && req.query.mes!=""){
      criteria.mes = { $regex: req.query.mes, $options: "i" }};
    const reunion = await Reunion.find(criteria);
    res.json(reunion)
}

//busqueda por oficina
reunionCtrl.getReunionOficina = async (req,res) => {
    //Cambiar para que funcione con criteria
    var criteria={};
    if(req.query.nroOficina!=null && req.query.nroOficina!=""){
      criteria.nroOficina = { $regex: req.query.nroOficina, $options: "i" }
    };
    const reunion = await Reunion.find(criteria);
    res.json(reunion);
}



module.exports = reunionCtrl;