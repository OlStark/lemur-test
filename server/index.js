require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { log } = require("console");
const router = require("./router");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`));
