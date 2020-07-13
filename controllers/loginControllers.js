const db = require("../models");

module.exports = {
  // creating new user
  createUser: function (req, res) {
    db.User.create(req.body)
      // only want to sent back id, not the rest of the info, even with PW hashed
      .then((dbModel) => {
        res.cookie("id", dbModel._id);
        // res.json(dbModel._id);
        res.send("new user created successfully, logging you in...");
      })
      .catch((err) => {
        console.log("\nUser creation error: ", err.message);
        res.json(err);
      });
  },

  // user log in to authenticate user
  userLogin: function (req, res) {
    // find user by username and verify submitted password
    db.User.findOne({ username: req.body.username }, function (err, user) {
      if (err) {
        res.status(422).json(err); // <-- some other error!
      } else if (user) {
        // We found the user! let's check their password...

        user.comparePassword(req.body.password, function (err, isMatch) {
          if (err) {
            throw err;
          } else if (isMatch) {
            // using express' res.cookie() to send a browser cookie containing user _id
            res.cookie("id", user._id);
            res.send(user.username + " logged in successfully!");
          } else if (!isMatch) {
            res.send({ error: "PASSWORD INCORRECT" });
          }
        });
      } else {
        res.send({ error: "Username not found!" });
        console.log("\tThat username doesn't exist");
      }
    });
  },
};
