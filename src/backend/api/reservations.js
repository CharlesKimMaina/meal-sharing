const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { returning } = require("../database");

router.post("/", async (request, response) => {
    try {
      // knex syntax for selecting things. Look up the documentation for knex for further info
      const reservations = await knex("reservations").select("*").insert(request.body)
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });

  router.get("/", async (req, res) => {
    try {
      const reservationslist = await knex("reservations").select("*");
      res.send(reservationslist);
    } catch (error) {
      throw error;
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const { id } = parseInt(req.params);
      const reservationById = await knex("reservations").where({ id });
      res.json(reservationById);
    } catch (error) {
      throw error;
    }
  });

module.exports = router;