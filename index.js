const express = require("express");
const cookieParser = require("cookie-parser");
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Hi From Youtube Live !");    
});


app.listen(2023,()=>{
    console.log("Server Is Running on Port : 2023");
})