const Empleado = require('../models/empleado');
const empleadoCtrl = {}
empleadoCtrl.getEmpleados = async (req, res) => {
    var empleados = await Empleado.find();
    res.json(empleados);
}
empleadoCtrl.getEmpleado = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
}
empleadoCtrl.createEmpleado = async (req, res) => {
    var empleado = new Empleado(req.body);
    try {
        await empleado.save();
        res.json({
        'status': '1',
        'msg': 'Empleado guardado.'})
    } catch (error) {
    res.status(400).json({
        'status': '0',
        'msg': 'Error procesando operacion.'})
    }
}
empleadoCtrl.editEmpleado = async (req, res) => {
    const vempleado = new Empleado(req.body);
    try {
        await Empleado.updateOne({_id: req.body._id}, vempleado);
        res.json({
            'status': '1',
            'msg': 'empleado updated'
    })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
    })
}
}
empleadoCtrl.deleteEmpleado = async (req, res)=>{
    try {
        await Empleado.deleteOne({_id: req.params.id});
        res.json({
            status: '1',
            msg: 'empleado removed'
    })
} catch (error) {
    res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
module.exports = empleadoCtrl;