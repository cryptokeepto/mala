const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const hostname = "0.0.0.0";
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to mala"); 
});

app.use(routes);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
}); 
