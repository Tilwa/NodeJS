const fs = require("fs");

//creating a new file
// fs.writeFileSync("read.txt", "my name is shahrukh altaf");

// fs.appendFileSync("read.txt", "and my nickname is tilwa");

// const buf_data = fs.readFileSync("read.txt");
// //console.log(buf_data);

// org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync("read.txt", "readwrite.txt");
