const mongoose=require('mongoose');
const {Schema}=mongoose;
const Empleado = require('./empleado');
const Recurso = require('./recurso');

const ReunionSchema= new Schema({
     fechaHoraComienzo: {type: String, required: true},
     fechaHoraFinal: {type: String, required: true},
     participantes: {type: Schema.Types.ObjectId, ref:Empleado},
     nroOficina: {type: String, required: true},
     recursos: {type: Schema.Types.ObjectId, ref:Recurso},
     tipoReunion: {type: String, required: true},
     temaReunion: {type: String, required: true},
     estado: {type: String, required: true},
     
})

module.exports = mongoose.models.Reunion || mongoose.model('Reunion',ReunionSchema);