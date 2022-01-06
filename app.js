// DEPENDENCIES
const express = require("express");
const res = require("express/lib/response");
const rock = require("./models/rock.js");

// CONFIGURATION
const app = express();

// ROUTES & Callback
app.get("/", (request, response) => {
  console.log("GET request received to route: /")
  response.send("Welcome to Express Minerals App. You rock!");
});

app.get("/rocks", (request, response) => {
  console.log("GET request received to route: /rocks")
  response.send(rock);
});

// Whatever value the user types will then be sent with the request and is accessible inside the request.params object.
app.get("/rocks/:index", (request, response) => {
  console.log("GET request received to route: /rocks/:index")
  // response.send(request.params); //> {"index": "(whatever it's inputted"}
  // Destructure
  const { index } = request.params
  response.send(`Rock #${Number(index) + 1}: ${rock[index]}`); //> {"index": "input"}
});

app.get("/hello/:first/:last", (request, response) => {
  const { first, last } = request.params
  response.send(`Hello, ${first[0].toUpperCase() + first.slice(1)} ${last[0].toUpperCase() + last.slice(1)}`)
  console.log(`Hello, ${first[0].toUpperCase() + first.slice(1)} ${last[0].toUpperCase() + last.slice(1)}`)
})

app.get("/add", (request, response) => {
  console.log("GET to /add")
  console.log(request.query) //> /add?num1=5&num2=4 === { num1: '5', num2: '4' }
  const { num1, num2 } = request.query
  const sum =  Number(num1) + Number(num2)
  // response.send(500) //> express will send status codes if it's a number that's being sent/ so if you put 404, it'll send NOT FOUND / 500 Internal Server Error
  response.send("The answer is: " + sum) //> so make sure to have numbers in a string to avoid confusion with status codes, which are numbers 
})

// EXPORT
module.exports = app;