const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

app.locals.title = "PitchTracker";

app.use(bodyParser.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);

app.get("/api/v1/classes", (request, response) => {
  database("classes")
    .select()
    .then(classes => {
      response.status(200).json(classes);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get("/api/v1/students", (request, response) => {
  database("students")
    .select()
    .then(students => {
      response.status(200).json(students);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}`);
});

module.exports = app;
