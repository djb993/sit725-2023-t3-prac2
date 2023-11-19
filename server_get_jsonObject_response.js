const express = require("express");
const app = express();
const port = 3040;
const addTwoNumbers = (n1, n2) => n1 + n2; 

app.get('/addTwoNumbers',(req,res) => 
{
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumbers(n1, n2);
    res.json({statuscode: 200, data: result}) //JSON Response
})

console.log(addTwoNumbers(19,12));

app.listen(port, () => {
    console.log("hello I'm listening on port "+port);
})

// Example Endpoint to add two numbers: http://localhost:3040/addTwoNumbers?n1=5&n2=10 is equal to 15
// Status Code 200: Success