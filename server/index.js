// Requiring module
const express = require("express");
const mysql = require("mysql2");
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

const db = require("./../client/src/util/database.js");

app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const graduationYear = req.body.graduationYear;
  const password = req.body.password;

  const newUser = {
    first_name: firstName,
    last_name: lastName,
    user_email: email,
    username: username,
    password: password,
    academic_year: graduationYear,
  };

  // SQL statement to insert new user into database

  db.query("INSERT INTO users SET ?", newUser)
    .then((result) => {
      res.send({ message: "Success", redirect: "/login" });
      console.log("Inserted ${result.affectedRows} rows(s)");
    })
    .catch((err) => {
      console.log(err);
    });

  // db.query('SELECT * FROM users')
  // .then(([rows, fields]) => {
  //   console.log(rows);
  // })
  // .catch(err => {
  //   console.log(err);
  // });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  pool
    .query("SELECT * FROM users WHERE username = ? AND password = ?", [
      username,
      password,
    ])
    .then(([rows, fields]) => {
      console.log(rows);
      res.send({ message: "Success", redirect: "/", profile: rows });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
