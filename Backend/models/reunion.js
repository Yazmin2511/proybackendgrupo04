const mongoose=require('mongoose');
const {Schema}=mongoose;
const Empleado = require('../models/empleado');
const Recurso = require('./recurso');

const ReunionSchema= new Schema({
     dia:{ type: String, required: true },
     mes:{ type: String, required: true },
     anio:{ type: String, required: true },
     horaComienzo: { type: String, required: true },
     horaFinal: { type: String, required: true },
     participantes: [{ type: Schema.ObjectId , ref:'Empleado' }],
//     recursos:[{type: Schema.ObjectId, ref:'Recurso'}],
     nroOficina: { type: String, required: true },
     tipoReunion: { type: String, required: true },
     temaReunion: { type: String, required: true },
     estado: { type: String, required: true },
     
})

module.exports = mongoose.models.Reunion || mongoose.model('Reunion',ReunionSchema);