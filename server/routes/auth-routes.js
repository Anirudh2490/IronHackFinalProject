const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");

// require the user model !!!!
const User = require("../models/User");

// ---------- SIGNUP --------- //

authRoutes.get("/signup", (req, res, next) => {
  res.status(200).json({ message: "Everything is ok...so far" });
});

authRoutes.post("/register-user", (req, res, next) => {
  // User.create({
  //     full_name: req.body.f,
  //     password: req.body.password
  // }).then(response => {res.json(response)}).catch(err => {err.json(err)});
  const full_name = req.body.full_name;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  if (!full_name || !password) {
    res.status(400).json({ message: "Provide full_name and password" });
    return;
  }

  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "email check went bad." });
      return;
    }

    if (foundUser) {
      res.status(400).json({ message: "email taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      full_name: full_name,
      email: email,
      password: hashPass,
      role: role
    });

    aNewUser.save(err => {
      if (err) {
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      }

      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, err => {
        if (err) {
          res.status(500).json({ message: "Login after signup went bad." });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(aNewUser);
      });
    });
  });
});

// ---------- LOGIN ---------- //

authRoutes.post("/login", (req, res, next) => {
  console.log("AT LOGIN");

  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }
    console.log("USER", theUser);
    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

authRoutes.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  // res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;
