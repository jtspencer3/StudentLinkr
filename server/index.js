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
const fs = require("fs");
const json = require("jsonify");
const multer = require("multer");

// Port Number
const PORT = process.env.PORT || 3001;

// Creating express object
const app = express();
const upload = multer({ dest: "uploads/" });
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
      res.send({ message: "Success", redirect: "/login" });
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
    res.send({ message: "loggedIn", userID: req.session.user });
  }
});
//what pulls info from database
app.post("/getHome", (req, res) => {
  const ID = req.body.userID;

  db.query(
    "SELECT u.first_name, u.last_name, f.followerID, f.followedID, p.post_caption, p.postdatetime FROM followers f INNER JOIN posts p ON f.followedID = p.user_id INNER JOIN users u ON p.user_id = u.user_id WHERE f.followerID = ? ORDER BY p.postdatetime DESC",
    [ID]
  )
    .then((rows, fields) => {
      res.send({ message: "Success", postResults: rows[0] });
    })
    .catch((err) => {
      console.log(err);
    });
});
//NEEDS COMMENT
app.post("/getGroups", (req, res) => {
  //const ID = req.body.userID;
  //Groups Query
  db.query("SELECT organization_name, organization_bio FROM organization")
    .then((rows, fields) => {
      res.send({ message: "Success", postResults: rows[0] });
    })
    .catch((err) => {
      console.log(err);
    });
});

//Discover query
app.post("/getDiscover", (req, res) => {
  //const ID = req.body.userID;
  //Groups Query
  db.query(
    "SELECT u.first_name, u.last_name, p.post_caption, p.postdatetime FROM StudentLinkr.posts p JOIN StudentLinkr.users u ON p.user_id = u.user_id ORDER BY p.postdatetime DESC;"
  )
    .then((rows, fields) => {
      console.log("success, ", rows[0]);
      res.send({ message: "Success", discoverResults: rows[0] });
    })
    .catch((err) => {
      console.log(err);
    });
});
//pulls followering for user from database
app.post("/getFollowing", (req, res) => {
  const ID = req.body.userID;

  db.query(
    "SELECT u.first_name, u.last_name, u.user_id, u.username FROM followers f INNER JOIN users u on f.followedID = u.user_id WHERE f.followerID = ?",
    [ID]
  )
    .then((rows, fields) => {
      res.send({ message: "Success", followingResults: rows[0] });
    })
    .catch((err) => {
      console.log(err);
    });
});
//Sumbits post
app.post("/submitPost", (req, res) => {
  const userId = req.body.userID;
  const postText = req.body.post;
  var date = new Date();
  date.toISOString().slice(0, 19).replace("T", " ");
  //creates a set to be inserted into my sql query
  const newPost = {
    user_id: userId,
    post_caption: postText,
    postdatetime: date,
    post_likes: 0,
  };
  //mySql query
  db.query("INSERT INTO posts SET ?", newPost)
    .then((result) => {
      res.send({ message: "Success", postResults: result[0] });
    })
    .catch((err) => {
      console.log(err);
    });
});

//Get Username for profile URLs
app.get('/profile/:username', (req, res) => {
  const username = req.params.username;
  console.log("call");
  console.log(username)
  db.execute("SELECT u.user_id, u.first_name, u.last_name, u.username, u.user_bio, u.academic_year, u.hasImage, u.user_email FROM users u WHERE username = ?", [username])
  .then((rows, fields) => {
    console.log(rows[0]);
    
    //db.release();
    res.json(rows[0]);
  }).catch((err) => {
    console.log(err);
  });
});

//NEEDS COMMENT
app.post("/loadUser", (req, res) => {
  const userId = req.body.userID;

  db.query(
    "SELECT first_name, last_name, user_bio, academic_year, username, hasImage, user_email, user_bio FROM users WHERE user_id = ?",
    [userId]
  )
    .then((result) => {
      var userResult = JSON.stringify(result[0]);
      var userJson = JSON.parse(userResult);
      res.send({ message: "Success", user: userJson });
    })
    .catch((err) => {
      console.log(err);
    });
});

//NEEDS COMMENT
app.post("/upload", upload.single("image"), (req, res) => {
  const tempPath = req.file.path;
  const extension = ".png";
  var username = "";
  db.query("SELECT username FROM users WHERE user_id = ?", req.session.user)
    .then((result) => {
      var userResult = JSON.stringify(result[0]);
      var userJson = JSON.parse(userResult);
      username = userJson[0].username;
      const targetPath = "client/public/uploads/" + username + extension;
      fs.rename(tempPath, targetPath, (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: "Failed to upload image" });
        } else {
          db.query(
            "UPDATE users SET hasImage = 1 WHERE user_id = ?",
            req.session.user
          ).then((result) => {
            console.log(result[0]);
            res.status(200).json({ message: "Image uploaded successfully" });
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//NEEDS COMMENT
app.post("/editProfile", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const graduationYear = req.body.graduationYear;
  const bio = req.body.bio;
  //register
  const newUser = {
    first_name: firstName,
    last_name: lastName,
    user_email: email,
    username: username,
    academic_year: graduationYear,
    user_bio: bio,
  };

  //Query to update user
  db.query("UPDATE users SET ? WHERE user_id = ?", [newUser, req.session.user])
    .then((result) => {
      res.send({ message: "Success", redirect: "/profile" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Fail" });
    });
});

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
