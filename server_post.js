var express = require("express");
const bodyParser = require("body-parser");
var app = express();
var port = process.env.port || 5500;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint
app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const result = num1 * num2;

  // Response
  res.send(`Data submitted! ${num1} * ${num2} is equal to: ${result}`);
});

app.listen(port,()=>{
    console.log("App listening to: "+ port)
});