const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("express");
const router = require("./routes/tour.routes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
app.use("/api/v1/tours", router);
module.exports = app;
