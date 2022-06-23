const mongoose = require('mongoose');
const {Schema} = mongoose;
const Recurso = require ('./recurso');
const RecursoSchema = new Schema({
    tipo: {type: String, required: true},
    nombre: {type: String, required: true},
    cantidad: {type:Number, required: true},
})
module.exports = mongoose.models.Recurso || mongoose.model('Recurso', RecursoSchema);