// Requiring module
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const saltRounds = 10;
const bcrypt = require("bcrypt");
//cookies
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const json = require("jsonify");

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
//cookie setup
app.use(
  session({
    key: "userID",
    secret: "subscribe",
    resave: "false",
    saveUninitialized: "false",
    cookie: {
      expires: new Date(Date.now() + 30 * 24 * 3600000), //This is how long cookies last 30 days, expire
    },
  })
);

const db = require("./../client/src/util/database.js");
//register
app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const graduationYear = req.body.graduationYear;
  const password = req.body.password;
  //register
  const newUser = {
    first_name: firstName,
    last_name: lastName,
    user_email: email,
    username: username,
    password: password,
    academic_year: graduationYear,
  };
  //Query to add new user into register
  db.query("INSERT INTO users SET ?", newUser)
    .then((result) => {
      console.log("After query");
      res.send({ message: "Success", redirect: "/login" });
      console.log("Inserted ${result.affectedRows} rows(s)");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const pass = req.body.password;

  const login = {
    username: username,
    pass: pass,
  };
  //Backend setting cookie login
  db.query("SELECT * FROM users WHERE username = ?", login.username)
    .then((result) => {
      var passResult = JSON.stringify(result[0]);
      var passJson = JSON.parse(passResult);
      if (result.length > 0) {
        bcrypt.compare(login.pass, passJson[0].password, (error, response) => {
          if (response) {
            req.session.user = passJson[0].user_id; //cookie always has user ID
            req.session.loggedIn = true;
            res.send({
              message: "Success",
              redirect: "/",
              userID: req.session.user,
            });
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
//logout user
app.get("/logout", (req, res) => {
  if (req.session.loggedIn == true) {
    req.session.loggedIn = false;
    res.send({ message: req.session.loggedIn, redirect: "/login" });
  }
});
//checks if user is logged out and redirects to login
app.post("/checkSession", (req, res) => {
  if (
    req.session.loggedIn == false ||
    typeof req.session.loggedIn === "undefined"
  ) {
    res.send({ message: "loggedOut", redirect: "/login" });
  } else {
    console.log(req.session.user);
    res.send({ message: "loggedIn", userID: req.session.user });
  }
});
//what pulls info from database
app.post("/getHome", (req, res) => {
  const ID = req.body.userID;

  db.query(
    "SELECT f.followerID, f.followedID, p.post_caption, p.user_id, p.postdatetime FROM followers f INNER JOIN posts p ON f.followedID = p.user_id WHERE f.followerID = ? ORDER BY p.postdatetime DESC;",
    ID
  )
    .then((rows, fields) => {
      console.log(rows[0]);
      res.send({ message: "Success", postResults: rows[0] });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
