const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { Band } = require("../models/index");
// Import routes
const musiciansRouter = require("../routes/musicians.js");
app.use("/musicians", musiciansRouter);

//Create a GET /musicians route to return all musicians
// app.get("/musicians", async (req, res) => {
//   const musicians = await Musician.findAll();
//   // Send musicians as converted to a JSON string .
//   res.json(musicians);
// });
// app.get("/musicians/:id", async (request, resolve) => {
//   const id = request.params.id;
//   const musicians = await Musician.findByPk(id);
//   // Send musicians as converted to a JSON string .
//   resolve.json(musicians);
// });

// app.get("/musicians/1", async (req, res) => {
//   const musiciansOne = await Musician.findByPk(1);
//   res.json(musiciansOne);
// });

// app.get("/musicians/2", async (req, res) => {
//   const musiciansTwo = await Musician.findByPk(2);
//   res.json(musiciansTwo);
// });

// app.get("/musicians/3", async (req, res) => {
//   const musiciansThree = await Musician.findByPk(3);
//   res.json(musiciansThree);
// });

//Create a GET /bands route to return all bands.
app.get("/bands", async (req, res) => {
  const bands = await Band.findAll();
  // Send bands as converted to a JSON string .
  res.json(bands);
});

app.use(express.json());
app.use(express.urlencoded());

// app.post("/musicians", async (request, resolve) => {
//   await Musician.create({
//     name: request.body.name,
//     instrument: request.body.instrument,
//   });

//   const musicians = await Musician.findAll();
//   resolve.json(musicians);
// });

// app.put("/musicians/:id", async (request, resolve) => {
//   await Musician.update(
//     {
//       name: request.body.name,
//       instrument: request.body.instrument,
//     },
//     {
//       where: {
//         id: request.params.id,
//       },
//     }
//   );
//   const thisMusician = await Musician.findByPk(request.params.id);
//   resolve.json(thisMusician);
// });

// app.delete("/musicians/:id", async (request, resolve) => {
//   await Musician.destroy({
//     where: {
//       id: request.params.id,
//     },
//   });

//   resolve.send("Item deleted");
// });

module.exports = app;
