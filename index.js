const express = require("express");

app = express();

app.set("view engine", "pug");

app.get("/", (req, res)=>{
    res.render("index")
});



app.listen("3000", (err)=>{
    if (err) throw err;
    console.log("Server is running on local");
});