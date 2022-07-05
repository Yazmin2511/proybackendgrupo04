const emailCtrl = {};

const { request, response } = require("express");
const nodemailer = require("nodemailer");

emailCtrl.enviarEmail = async (req = request, res = response) => {
  let body = req.body;
  let transpot = nodemailer.createTransport({
    host: "smtp.mailtrap.io", //servidor para realizar las pruebas. Se crea una cuenta en https://mailtrap.io/
    post: 2525,
    auth: {
      user: "f4f99f1bdb7657",
      pass: "89fbc810601abf",
    },
  });

  let info = {
    from: "grupo4pysw2022@gmail.com",
    to: body.destinatarios, //correo o lista de correos ej: "correo1@c.com, correo2@c.com, correo3@c.com"
    subject: body.asunto, //asuto del mail
    html: body.mensaje, //mensaje en formato html
    attachments: body.adjunto, //para adjuntar archivos en un array
    /**
     * 
    [
    {
    filename: 'name',
    patch: 'ruta del archivo'
    },
    {
    filename: 'name',
    patch: 'ruta del archivo'
    }
    ]
     * 
     */
  };

  transpot.sendMail(info, function (error, result) {
    if (error) return res.json({ ok: false, msg: error });
    return res.json({
      ok: true,
      msg: result,
    });
  });
};

module.exports = emailCtrl;
