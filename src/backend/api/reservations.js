const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
//const { returning } = require("../database");

//get all the reservations
router.get("/", async (request, response) => {
  try {
    //// knex syntax for selecting table records.
    const allReservations = await knex("reservations").select("*");
    response.json(allReservations);
  } catch (error) {
    throw error;
  }
});

//Adds a new reservation
router.post("/", async (req, res) => {
  const {
    number_of_guests,
    meal_id,
    created_date,
    name,
    phonenumber,
    email,
  } = req.body;
  const newReservation = {
    number_of_guests,
    meal_id,
    created_date,
    name,
    phonenumber,
    email,
  };
  try {
    await knex("reservations").insert(newReservation);
    res.send("New reservation added");
  } catch (error) {
    res.send("Error: " + error);
  }
});

/*router.post("/", async (req, res) => {
  try {
    const newReservation = await knex("reservations").insert(req.body);
    res.json(newReservation);
  } catch (error) {
    throw error;
  }
});*/

router.get("/:id", async (req, res) => {
  try {
    const reservationById = await knex("reservations").where(req.params);
    res.json(reservationById);
  } catch (error) {
    throw error;
  }
});

//how to update reservations
router.put("/:id", async (req, res) => {
  try {
    const updatedReservation = await knex("reservations")
      .where(req.params)
      .update(req.body);
    res.json(updatedReservation);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedReservation = await knex("reservations")
      .where(req.params)
      .del();
    res.json(deletedReservation);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
