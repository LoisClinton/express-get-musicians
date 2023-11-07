// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
execSync("npm run seed");

const request = require("supertest"); //allows access to the response to an endpoint.
const { db } = require("./db/connection");
const { Musician } = require("./models/index");
const app = require("./src/app");
const seedMusician = require("./seedData");
const express = require("express");

describe("./musicians endpoint", () => {
  //   A HTTP status code of 200 indicates a successful GET request was made. We can access a status code using the response.statusCode method.
  test("Testing Musicians endpoint", async () => {
    // Sends request to `/musicians` endpoint
    const response = await request(app).get("/musicians");
    expect(response.statusCode).toBe(200);
  });

  //   When sending data from a database the response sends a JSON string. To convert this back to a JSON object where we can access values, we can use JSON.parse() on the text in the response.
  test("Testing Musicians endpoint has the right entries", async () => {
    const response = await request(app).get("/musicians");
    const responseData = JSON.parse(response.text);
    expect(responseData[0].name).toBe("Mick Jagger");
  });
  test("Testing Musicians endpoint is made up of objects", async () => {
    const response = await request(app).get("/musicians");
    const responseData = JSON.parse(response.text);

    expect(typeof responseData[0]).toBe("object");
  });
});

describe("./musician/:id endpoint", () => {
  //   A HTTP status code of 200 indicates a successful GET request was made. We can access a status code using the response.statusCode method.
  test("Testing musician endpoint", async () => {
    const response = await request(app).get("/musicians/:id");
    expect(response.statusCode).toBe(200);
  });
});

describe("./bands endpoint", () => {
  //   A HTTP status code of 200 indicates a successful GET request was made. We can access a status code using the response.statusCode method.
  test("Testing bands endpoint", async () => {
    // Sends request to `/bands` endpoint
    const response = await request(app).get("/bands");
    expect(response.statusCode).toBe(200);
  });

  //   When sending data from a database the response sends a JSON string. To convert this back to a JSON object where we can access values, we can use JSON.parse() on the text in the response.
  test("Testing bands endpoint has the right entries", async () => {
    const response = await request(app).get("/bands");
    const responseData = JSON.parse(response.text);
    expect(responseData[0].name).toBe("The Beatles");
  });

  test("Testing bands endpoint is made up of objects", async () => {
    const response = await request(app).get("/bands");
    const responseData = JSON.parse(response.text);

    expect(typeof responseData[0]).toBe("object");
  });
});
