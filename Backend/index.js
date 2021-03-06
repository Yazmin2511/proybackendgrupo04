const express = require("express");
const cors = require("cors");
const { mongoose } = require("./database");
var app = express();
app.use(express.urlencoded({ extended: false })); //para email
app.use(express.json());
//app.use(bodyParser.json()); //para email
app.use(cors({ origin: "http://localhost:4200" }));
app.use("/api/usuario", require("./routes/usuario.route")); //para el login
app.use("/api/empleado", require("./routes/empleado.route.js")); //para la lista de empleados
app.use("/api/reunion", require("./routes/reunion.route.js")); // reuniona
app.use("/api/recurso", require("./routes/recurso.route.js")); // recurso
app.use("/api/email", require("./routes/email.route.js")); //email
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`Server started on port`, app.get("port"));
});
