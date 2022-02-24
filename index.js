const express = require("express");

app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to the homepage")
});



app.listen(3000, (err)=>{
    if (err) throw err;
    console.log("Server is running on local");
});