const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const curpRoutes = require("./routes/routes");

const app = express();

app.unsubscribe(cors())
app.use(morgan("dev"));
app.use(express.json());

app.use(curpRoutes);

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
});

app.listen(4000);
console.log("Server on port 4000");
