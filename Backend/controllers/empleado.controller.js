const Empleado = require('../models/empleado');
const empleadoCtrl = {}
empleadoCtrl.getEmpleados = async (req, res) => {
    var empleados = await Empleado.find();
    res.json(empleados);
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
module.exports = empleadoCtrl;