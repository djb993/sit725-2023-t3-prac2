var express = require("express");
var app = express();
var port = process.env.port || 5500;

app.get("/addTwoNumbers", (req, res) => {
    //Grab the numbers from the URL
    const firstNum = parseFloat(req.query.firstNum);
    const secondNum = parseFloat(req.query.secondNum);
    //Confirm both are numbers:
    if (isNaN(firstNum) || isNaN(secondNum)) {
        res.status(400).send("Number Parameters Are Required.")
    }
    else {
        const result = firstNum + secondNum;  
        res.send(`${firstNum} + ${secondNum} is equal to: ${result}`);
    }
});

app.listen(port,()=>{
    console.log("App listening to: "+port)
});

// Example Endpoint to add two numbers: http://localhost:5500/addTwoNumbers?firstNum=5&secondNum=11 is equal to 16
// Status Code 400: Error