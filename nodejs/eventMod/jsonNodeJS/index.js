const fs = require("fs");
const data = {
  name: "Shahrukh",
  age: 28,
  gender: "male",
};

//console.log(data);

const jsonData = JSON.stringify(data);
//console.log(jsonData);
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("file created");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});
