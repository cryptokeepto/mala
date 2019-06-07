const express = require("express");
const app = express();
const hostname = "0.0.0.0";
const port = 3000;

app.get("/", (req, res) => {
  res.send("index"); 
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
}); 
