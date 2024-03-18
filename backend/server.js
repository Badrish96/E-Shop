//This is the starting point of the application

const serverConfig = require("./Configs/server.config");
const dbConfig = require("./Configs/db.config");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

const mongoose = require("mongoose");

app.listen(serverConfig.PORT, () => {
  console.log("Sever started at PORT: ", serverConfig.PORT);
});

//Connecting to Database

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to DB");
});

db.once("open", () => {
  console.log("Connected to DB");
});
//Routes
require("./Routes/auth.route")(app);
require("./Routes/address.routes")(app);
require("./Routes/product.route")(app);
require("./Routes/order.routes")(app);
require("./Routes/addToCart.route")(app);
