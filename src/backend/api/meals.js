const express = require("express");
const router = express.Router();
const knex = require("../database");

//Get all meals
router.get("/", async (req, res) => {
  try {
    const mealslist = await knex("meals").select("*");
    res.send(mealslist);
  } catch (error) {
    throw error;
  }
});

//get the titles of the meals
router.get("/titles", async (request, response) => {
  try {
    // knex syntax for selecting table records.
    const titles = await knex("meals").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//GET api/meals/ query parameters

router.get("/", async function (req, res) {
  const {
    maxPrice,
    title,
    availableReservations,
    createdAfter,
    limit,
  } = req.query;
  const mealTitles = await knex.select("*").table("meals");

  if (Object.keys(req.query).length === 0) {
    res.send(mealTitles);
  } 

  if (maxPrice) {
    try {
      const maxPriceMeals = await knex(meals)
        .select("*")
        .where("price", "<", maxPrice);
      if (maxPriceMeals < 0) {
        res.status(404).send("Sorry price must be more than zero");
      }
      res.send(maxPriceMeals);
    } catch (error) {
      error;
    }
  }

  if (title) {
    try {
      const titles = await knex(meals)
        .select("*")
        .where("title", "like", `%${title}%`);
      if (title.length === 0) {
        res.status(404).send("Sorry title is not found");
      }
      res.send(titles);
    } catch (error) {
      error;
    }
  }

  if (availableReservations === "true") {
    try {
      const availableReservationsMeal = await knex
        .select("*")
        .sum({
          sumTotal: "reservations.number_of_guests",
        })
        .table("meals")
        .join("reservations", {
          "meals.id": "reservations.meal_id",
        })
        .groupBy("meals.title")
        .having("sumTotal", ">", "Max_reservations");
      console.log(availableReservationsMeal);
      res.send(availableReservationsMeal);
    } catch (error) {
      error;
    }
  }

  if (createdAfter) {
    try {
      const datecreated = await knex
        .select("*")
        .table("meals")
        .where("created_date", "<", createdAfter);
      console.log(datecreated);
      res.send(datecreated);
    } catch (error) {
      error;
    }
  }

  if (limit) {
    try {
      const limitMeals = await knex.select("*").table("meals").limit(limit);
      console.log(limitMeals);
      res.send(limitMeals);
    } catch (error) {
      error;
    }
  }
});

//Adds a new reservation
router.post("/", async (req, res) => {
  const {
    title,
    description,
    location,
    when,
    Max_reservation,
    price,
    created_date,
  } = req.body;
  const newMeal = {
    title,
    description,
    location,
    when,
    Max_reservation,
    price,
    created_date,
  };
  try {
    await knex("meals").insert(newMeal);
    res.send("New meal added");
  } catch (error) {
    res.send("Error: " + error);
  }
});


//Get meals with id
router.get("/:id", async (req, res) => {
  try {
    const  { id } = parseInt(req.params);
    const mealWithIDb = await knex("meals").where({"meals.id": id});
    res.json(mealWithIDb);
  } catch (error) {
    throw error;
  }
});

//Updates the meal by id
router.put("/:id", async (req, res) => {
  try {
    const updatedMeal = await knex("meals").where(req.params).update(req.body);
    res.json(updatedMeal);
  } catch (error) {
    throw error;
  }
});

//Deletes the meal by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedMeal = await knex("meals").where(req.params).del();
    res.json(deletedMeal);
  } catch (error) {
    error.send("404 errror not found");
  }
});

module.exports = router;


/*The Object.keys() method returns an array of a given 
  object's own enumerable property names, iterated in the same order that a normal loop would*/
