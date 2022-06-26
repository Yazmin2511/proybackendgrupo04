const mongoose=require('mongoose');
const {Schema}=mongoose;
const Empleado = require('./empleado');
const Usuario = require('./usuario');
const Recurso = require('./recurso');

const ReunionSchema= new Schema({
     dia:{type: String, required: true},
     mes:{type: String, required: true},
     anio:{type: String, required: true},
     horaComienzo: {type: String, required: true},
     horaFinal: {type: String, required: true},
     //participantes: [{type: Schema.Types.ObjectId, ref:Empleado}],
     participantes: [ 
          EmpleadoSchema = new Schema({
          user: {type: Schema.Types.ObjectId, ref: Usuario, required: true},
          apellido: {type: String, required: true},
          nombre: {type:String, required: true},
          legajo: {type: String, required: true},
          correo: {type:String, required:true},
          dependencia: {type: String, required: true}
      })],
     nroOficina: {type: String, required: true},
    // recursos: {type: Schema.Types.ObjectId, ref:Recurso},
     tipoReunion: {type: String, required: true},
     temaReunion: {type: String, required: true},
     estado: {type: String, required: true},
     
})

module.exports = mongoose.models.Reunion || mongoose.model('Reunion',ReunionSchema);