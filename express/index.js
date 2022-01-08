const path = require("path");
const hbs = require("hbs");
const requests = require("requests");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("", (req, res) => {
  res.render("index", {
    username: "Shahrukh",
  });
});

app.get("/", (req, res) => {
  res.send("Hello from home page");
});

app.get("/about", (req, res) => {
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=532d57b5ea33ee783ed83980e0b7a521`
  )
    .on("data", (chunk) => {
      const objdata = JSON.parse(chunk);
      const arrData = [objdata];
      console.log(
        `City name is ${arrData[0].name} and the temp is  ${arrData[0].main.temp}`
      );

      res.write(arrData[0].name);
    })
    .on("end", (err) => {
      if (err) return console.log("connection closed due to errors", err);
      res.end();
    });
});

app.get("/about/*", (req, res) => {
  res.render("404", {
    errorComment: "Opps this about us page has not this path ",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorComment: "Opps this page is not found ",
  });
});

app.listen(8000, () => {
  console.log("8000 port is in working ");
});
