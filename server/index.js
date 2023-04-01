// Requiring module
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Port Number
const PORT = process.env.PORT || 3001;

// Creating express object
const app = express();

app.use(express.json());
app.use(cors());

// Database connection goes here
// We can use dotenv and an .env file to store our database info privately
// That .env file needs to be added to the git ignore and never pushed to github

// Testing connection with React
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});
const message = "Success";

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  res.send("Success");

  // SQL statement to insert new user into database
});

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));

// app.get('/express_backend', (req, res) => {
// 	res.send( { express: 'Your express backend is connected to react.' });
// });
