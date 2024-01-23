const express = require("express");
const morgan = require("morgan");

const curpRoutes = require("./routes/routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(curpRoutes);

app.listen(3000);
console.log("Server on port 3000");
