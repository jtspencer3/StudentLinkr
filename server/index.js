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

// const db = mysql.createConnection({
//   user: "test",
//   host: "143.244.171.250",
//   password: "test",
//   database: "StudentLinkr",
// });

// Testing connection with React
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});
const message = "Success";

app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const graduationYear = req.body.graduationYear;
  const password = req.body.password;

  // SQL statement to insert new user into database

  // db.query(
  //   "INSERT INTO users (first_name, last_name, user_email, username, password, academic_year) VALUES (?,?,?,?,?,?)",
  //   [firstName, lastName, email, username, password, graduationYear],
  //   (err, result) => {
  //     console.log(err);
  //   }
  // );

  res.send({ message: "Success", redirect: "/login" });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  res.send({ message: "Success", redirect: "/" });

  // if (password === "pass" && username === "user") {
  //   return res.redirect("/about");
  // } else {
  //   return res.redirect("/contact");
  // }
  // db.query();

  // After logging in, redirect to home page
});

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));

// app.get('/express_backend', (req, res) => {
// 	res.send( { express: 'Your express backend is connected to react.' });
// });
