//controllers
const {
  getAllDestinations,
  getDestinationsByCountry,
  createNewDestination,
  updateDestination,
  deleteDestination,
  getDestinationDetails,
  getDestinationByEmail,
} = require("../controllers/destinations.controller");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(400);
  res.json({ status: 400, msg: "Please give us a valid get url" });
});

router.get("/all", getAllDestinations);
router.get("/:_id", getDestinationDetails);
router.get("/email/:email", getDestinationByEmail);
router.get("/country/:country", getDestinationsByCountry);
router.post("/create", createNewDestination);
router.put("/update", updateDestination);
router.delete("/delete", deleteDestination);

module.exports = router;
