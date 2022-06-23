const mongoose = require('mongoose');
const {Schema} = mongoose;
const Usuario = require ('./usuario');
const EmpleadoSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: Usuario, required: true},
    apellido: {type: String, required: true},
    nombre: {type:String, required: true},
    legajo: {type: String, required: true},
    correo: {type:String, required:true},
    dependencia: {type: String, required: true}
})
module.exports = mongoose.models.Empleado || mongoose.model('Empleado', EmpleadoSchema);