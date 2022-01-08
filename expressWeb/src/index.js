const express = require("express");
const app = express();
const port = 8000;
const path = require("path");

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

app.get("", (req, res) => {
  res.send("welcome to home page");
});
app.get("/about", (req, res) => {
  res.send("welcome to about page");
});
app.get("/weather", (req, res) => {
  res.send("welcome to weather page");
});

app.get("*", (req, res) => {
  res.send("404 error page");
});
app.listen(port, () => {
  console.log(`Listening to the port at ${port}`);
});
