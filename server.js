const express = require("express");
const app = express();
const port = process.env.port || 5500;
const addTwoNumbers = (n1, n2) => n1 + n2; 

app.get("/addTwoNumbers", (req, res) => {
    //Grab the numbers from the URL
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    //Confirm both are numbers:
    if (isNaN(n1) || isNaN(n2)) {
        res.json({statuscode: 400, data: "Number Parameters Are Required." });
    }
    else {
        const result = addTwoNumbers(n1,n2);  
        res.json({statuscode: 200, data: `The sum of the integers ${n1} and ${n2} is equal to: ${result}` }) //JSON Response
    }
});
console.log(addTwoNumbers(20,10));

app.listen(port,()=>{
    console.log("hello I'm listening on port "+ port);
});

// Example Endpoint to add two numbers: http://localhost:5500/addTwoNumbers?n1=5&n2=11 is equal to 16
// Status Code 400: Error