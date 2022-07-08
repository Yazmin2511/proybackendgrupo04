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
    const reuniones = await Reunion.find().populate("participantes").populate("recursos").exec();
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
    const reunion = await Reunion.findById(req.params.id).populate('participantes').populate("recursos").exec();
    res.json(reunion)
}

reunionCtrl.getReunionParticipante = async (req,res) => {
    const reuniones = await Reunion.find(req.params).populate("participantes").populate("recursos").exec();
    res.json(reuniones);
}

// get reunion x !participante
reunionCtrl.getReunionNoParticipante = async (req,res) => {
    const reunion = await Reunion.find();//.populate('participantes').exec(); 
    /* console.log(reunion.filter((p) =>  p.participantes != req.params.participantes  )); */
    //const reuniones = reunion.filter((p) =>  p.participantes != req.params.participantes  );

    res.json(reunion.filter((p) =>  p.participantes != req.params.participantes  ));    
}
//busqueda por oficina
reunionCtrl.getReunionOficina = async (req,res) => {
    //Cambiar para que funcione con criteria
    var criteria={};
    if(req.query.nroOficina!=null && req.query.nroOficina!=""){
      criteria.nroOficina = { $regex: req.query.nroOficina, $options: "i" };
    }
    const reunion = await Reunion.find(criteria).populate("participantes").populate("recursos").exec();
    res.json(reunion);
}
//busqueda por fecha
reunionCtrl.getReunionDias = async (req,res) => {
    
    var criteria={};
    if(req.query.dia!=null && req.query.dia!=""){
      criteria.dia = { $regex: req.query.dia, $options: "i" }
    };
    if(req.query.mes!=null && req.query.mes!=""){
        criteria.mes = { $regex: req.query.mes, $options: "i" }
      };
    const reunion = await Reunion.find(criteria).populate("participantes").populate("recursos").exec();
    res.json(reunion);
}

reunionCtrl.getReunionLegajoEmpledo = async (req,res) => {
    const reunion = await Reunion.find(req.params).populate("participantes").populate("recursos").exec();
    res.json(reunion); 
}






///requerido para estadisticas
//recupera todas las reuniones de un tipo (Informativa,Formativa, etc) recibe un parametro
reunionCtrl.getReunionesTipo = async (req, res) => {
  let tipo = req.params.tipoReunion;
  const reuniones = await Reunion.find({ tipoReunion: tipo });
  res.json(reuniones);
};

//recupera reuniones a las que fue/es invitado un empleado en determinado mes y año. recibe tres parametros
reunionCtrl.getReunionesPersonasFiltros = async (req, res) => {
  let p = req.query.participantes;
  let m = req.query.mes;
  let a = req.query.anio;
  var reuniones = await Reunion.find({ participantes: p, mes: m, anio: a });
  res.json(reuniones);
};

//recupera reuniones a las que fue/es/será ocupada un oficina en determinado mes y año. recibe tres parametros
reunionCtrl.getReunionesOficinaFiltros = async (req, res) => {
  let o = req.query.nroOficina;
  let m = req.query.mes;
  let a = req.query.anio;
  var reuniones = await Reunion.find({ nroOficina: o, mes: m, anio: a });
  res.json(reuniones);
};

//recupera tipos de reuniones de un determinado mes y año. recibe tres parametros
reunionCtrl.getReunionesTipoFiltros = async (req, res) => {
  let t = req.query.tipoReunion;
  let m = req.query.mes;
  let a = req.query.anio;
  var reuniones = await Reunion.find({ tipoReunion: t, mes: m, anio: a });
  res.json(reuniones);
};









module.exports = reunionCtrl;
