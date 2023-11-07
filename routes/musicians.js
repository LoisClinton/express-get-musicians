const express = require("express");
const { Musician } = require("../models/index");
const { Band } = require("../models/index");
const { db } = require("../db/connection");
const router = express.Router();

router.get("/", async (req, res) => {
  const musicians = await Musician.findAll();
  // Send musicians as converted to a JSON string .
  res.json(musicians);
});

router.get("/:id", async (request, response) => {
  const id = request.params.id;
  const musicians = await Musician.findByPk(id);
  // Send musicians as converted to a JSON string .
  response.json(musicians);
});

router.post("/musicians", async (request, response) => {
  await Musician.create({
    name: request.body.name,
    instrument: request.body.instrument,
  });

  const musicians = await Musician.findAll();
  response.json(musicians);
});

router.put("/musicians/:id", async (request, response) => {
  await Musician.update(
    {
      name: request.body.name,
      instrument: request.body.instrument,
    },
    {
      where: {
        id: request.params.id,
      },
    }
  );
  const thisMusician = await Musician.findByPk(request.params.id);
  response.json(thisMusician);
});

router.delete("/musicians/:id", async (request, response) => {
  await Musician.destroy({
    where: {
      id: request.params.id,
    },
  });

  response.send("Item deleted");
});

module.exports = router;
