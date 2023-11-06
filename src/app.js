const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { Band } = require("../models/index");
const { db } = require("../db/connection");

const port = 3000;

//Create a GET /musicians route to return all musicians
app.get("/musicians", async (req, res) => {
  const musicians = await Musician.findAll();
  // Send musicians as converted to a JSON string .
  res.json(musicians);
});

app.get("/musicians/1", async (req, res) => {
  const musiciansOne = await Musician.findByPk(1);
  res.json(musiciansOne);
});

app.get("/musicians/2", async (req, res) => {
  const musiciansTwo = await Musician.findByPk(2);
  res.json(musiciansTwo);
});

app.get("/musicians/3", async (req, res) => {
  const musiciansThree = await Musician.findByPk(3);
  res.json(musiciansThree);
});

//Create a GET /bands route to return all bands.
app.get("/bands", async (req, res) => {
  const bands = await Band.findAll();
  // Send bands as converted to a JSON string .
  res.json(bands);
});

module.exports = app;
