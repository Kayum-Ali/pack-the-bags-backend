const { destinations } = require("../db");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(400);
  res.json({ status: 400, msg: "Please give us a valid get url" });
});

router.get("/all", (req, res) => {
  destinations
    .find()
    .toArray()
    .then((data) => {
      res.status(200);
      res.send(data);
    });
});

module.exports = router;
