const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { destinations, db } = require("./db");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ status: 200, msg: "Server running properly" });
});

// Routes
const destinationRoute = require("./routes/destinations.route");
app.use("/destinations", destinationRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
