// Requiring module
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const saltRounds = 10;
const bcrypt = require("bcrypt")
//cookies
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const json = require('jsonify');

// Port Number
const PORT = process.env.PORT || 3001;

// Creating express object
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userID",
    secret: "subscribe", //needs to be carful with this change laster
    resave: "false",
    saveUninitialized: "false",
    cookie: {
      expires: new Date(Date.now() + 30 * 24 * 3600000), //This is how long cookies last 30 days
    },
  })
);
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

  app.get("/login", (req, res) => {
    //checks if user logged in
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });

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
      console.log("After query");
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
  const pass = req.body.password;

  const login = {
    username: username,
    pass: pass,
  };
  db.query("SELECT password FROM users WHERE username = ?", login.username)
    .then((result) => {
      var passResult = JSON.stringify(result[0]);
      var passJson = JSON.parse(passResult);
      console.log(login.pass, " from react\n");
      console.log(passJson[0].password, " from MySQL");
      if (result.length > 0) {
        bcrypt.compare(login.pass, passJson[0].password, (error, response) => {
          if (response) {
            req.session.user = result; //cookie always have user ID
            console.log(req.session.user);
            res.send({ message: "Success", redirect: "/", profile: result });
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
        //   bcrypt.compare(login.password, result[0].password, (error, response) => {
        //   req.session.user = result; //cookie always have user ID
        //   //console.log(req.session.user);
        //   res.send({ message: "Success", redirect: "/", profile: result });
        //   } else {
        //   res.send({ message: "Wrong username/password combination!" });
        // }
      } else {
        res.send({ message: "User doesn't exist" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
  // bcrypt.compare(login.password, result[0].password, (error, response) => {
  //   if(response) {
  //req.session.user = result; //cookie always have user ID
  //console.log(req.session.user);
  //res.send({ message: "Success", redirect: "/", profile: result });
  //   }else{
  //     res.send({message : "Wrong username/password combination!"});
  //   }
  //});
});

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
