const emailCtrl = require("./../controllers/email.controller");
const express = require("express");
const router = express.Router();
router.post("/send/", emailCtrl.enviarEmail);
module.exports = router;
