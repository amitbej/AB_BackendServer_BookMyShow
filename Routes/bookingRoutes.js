const express = require("express");
const bookingRouter = express.Router();
const bookingsModel = require("../model/bookings");


bookingRouter.get("/booking", (req, res, next) => {  
  bookingsModel
    .find()
    .then((result) => {
      if (result.length === 0 || !result) {
        return res.send([]);
      } else {
        return res.send(result[result.length - 1]);
      }
    })
    .catch((err) => console.log(err));
});

// router for post request
bookingRouter.post("/booking", (req, res, next) => {
  const data = req.body;

  const movie = data.movie;
  const slot = data.timeSlot;
  const seats = data.seat;

  const movieBooking = new bookingsModel({ movie, slot, seats });

  // saving the user data in the database 
  movieBooking
    .save()
    .then(() =>
      bookingsModel
        .find()
        .then((result) =>
          res.status(200).send(JSON.stringify(result[result.length - 1]))
        )
    )
    .catch((err) => console.log(err));
});

module.exports = bookingRouter;
