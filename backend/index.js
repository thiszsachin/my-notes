const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
  res.send("First Enpoint");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is Running on Port ${PORT}`));
