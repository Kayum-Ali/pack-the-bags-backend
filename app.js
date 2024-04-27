const express = require("express");
const app = express();
require("dotenv").config();
const { destinations, db } = require("./db");

// Routes
const destinationRoute = require("./routes/destinations.route");
app.use("/destinations", destinationRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
