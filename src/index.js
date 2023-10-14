const express = require("express");
const config = require("./config/config");
const { connectDB } = require("./db/dbconnection");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/v1");
const path = require("path");

const app = express();

/* ---------------------- Allow form data from the body --------------------- */
app.use(bodyParser.urlencoded({ extended: false }));

/* ---------------------- Allow json data from the body --------------------- */
app.use(bodyParser.json());

/* --------- Allow the helps to get resources from external servers --------- */
app.use(cors());
app.options("*", cors());

/* ------------------------------- Images path ------------------------------ */
app.use(express.static(path.join(__dirname, `./public`)));

/* ---------------------------- Route connection ---------------------------- */
app.use("/v1", routes);

/* --------- Whenever route not connect that time through the error --------- */
app.use((req, res, next) => {
  next(new Error("Route not connected!"));
});

/* --------------------------- Database connection -------------------------- */
connectDB();

/* ---------------------- Create Server by the Express ---------------------- */
app.listen(config.port, () => {
  console.log(`Created server on port number is ${config.port}`);
});
