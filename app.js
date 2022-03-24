const express = require("express");
const path =require('path');
const PORT = process.env.PORT || 4001;

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/loguin", (req, res) => {
  res.sendFile(__dirname + "/views/loguin.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});


app.listen(PORT, () => console.log("running on port 4001"));

