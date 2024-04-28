const { BSON } = require("mongodb");
const { destinations } = require("../db");

const getAllDestinations = (req, res) => {
  destinations
    .find()
    .toArray()
    .then((data) => {
      res.status(200);
      res.send(data);
    });
};

const getDestinationByEmail = (req, res) => {
  const { email } = req.params;
  destinations
    .find({ email: email })
    .toArray()
    .then((data) => {
      res.status(200);
      res.send(data);
    });
};

const getDestinationDetails = (req, res) => {
  const objId = new BSON.ObjectId(req.params._id);
  destinations
    .findOne({ _id: objId })
    .then((response) => {
      if (response) {
        res.status(200);
        res.send(response);
      } else {
        res.status(404);
        res.send({ status: 404, msg: "Data not found on the server" });
      }
    })
    .catch((err) => {
      res.status(500);
      res.json({ status: 500, msg: "Internal Server Error" });
    });
};

const getDestinationsByCountry = (req, res) => {
  const countryName = req.params.country;
  destinations
    .find({
      country_name: countryName,
    })
    .toArray()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500);
      res.json({ status: 500, msg: "Internal Server Error" });
    });
};

const createNewDestination = (req, res) => {
  const {
    image,
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
  } = req.body;
  const { email } = req.headers;

  destinations
    .insertOne({
      image,
      tourist_spot_name,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      total_visitors_per_year,
      email,
    })
    .then((data) => {
      res.status(201);
      res.json({ status: 201, msg: "Destination Created Successfully" });
    })
    .catch((err) => {
      res.status(500);
      res.json({ status: 500, msg: "Internal Server Error" });
    });
};

const updateDestination = (req, res) => {
  const { _id, email } = req.headers;
  const objID = new BSON.ObjectId(_id);
  const {
    image,
    tourist_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    total_visitors_per_year,
  } = req.body;

  destinations
    .updateOne(
      { $and: [{ _id: objID }, { email: email }] },
      {
        $set: {
          image,
          tourist_spot_name,
          country_name,
          location,
          short_description,
          average_cost,
          seasonality,
          travel_time,
          total_visitors_per_year,
        },
      }
    )
    .then((response) => {
      if (response.matchedCount) {
        res.status(200);
        res.json({ status: 200, msg: "Data Updated Successfully" });
      } else {
        res.status(404);
        res.json({
          status: 404,
          msg: "Sorry! The data you requested not found on server : (",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({ status: 500, msg: "Internal Server Error" });
    });
};

const deleteDestination = (req, res) => {
  const { _id, email } = req.headers;
  console.log(_id, email);
  const objID = new BSON.ObjectId(_id);
  destinations
    .deleteOne({
      $and: [{ _id: objID }, { email: email }],
    })
    .then((response) => {
      if (response.deletedCount) {
        res.status(200);
        res.json({ status: 200, msg: "Destination Deleted Successfully" });
      } else {
        res.status(404);
        res.json({ status: 404, msg: "Email or Destination Id not matched" });
      }
    })
    .catch((err) => {
      res.status(500);
      res.json({ status: 500, msg: "Internal Server Error" });
    });
};

module.exports.getAllDestinations = getAllDestinations;
module.exports.getDestinationDetails = getDestinationDetails;
module.exports.getDestinationByEmail = getDestinationByEmail;
module.exports.getDestinationsByCountry = getDestinationsByCountry;
module.exports.createNewDestination = createNewDestination;
module.exports.updateDestination = updateDestination;
module.exports.deleteDestination = deleteDestination;
