const reunionCtrl= require('./../controllers/reunion.controller');

const express = require('express');
const router = express.Router();

router.get('/', reunionCtrl.getReuniones);

module.exports = router;