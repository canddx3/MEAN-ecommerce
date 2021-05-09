const express         = require('express');
const router          = express.Router();
const User            = require('../models/user');
const Mountainbikes   = require('../models/mountainbikes');

module.exports = function(router) {
  // http://localhost:8080/api/user
  // User signup
  router.post('/user', function(req, res) {
    const user = new User();
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname; 
      user.email = req.body.email; 
      user.address = req.body.address; 
      user.phone = req.body.phone;
      user.username = req.body.username;
      user.password = req.body.password;
        if (req.body.username == null || 
            req.body.username == "" ||
            req.body.password == null ||
            req.body.password == "") {
            res.json({ success: false, message: 'Must enter all fields'});
          } else {
          user.save(function(err) {
              if(err) {
                res.json({ success: false, message: 'Username or Email already exists!'});
              }else {
                res.json({ success: true, message: 'user created!'});
              }
          });    
       }
      });

      // http://localhost:8080/api/login
      // User Login
      router.post('/login', function(req, res) {
        User.findOne({ username: req.body.username}).select('email username password').exec(function(err, user) {
          if(err) throw err;
          if(!user) {
            res.json({ success: false, message: 'User doesnt exist'});
          } else if (user){
            if(req.body.password) {
            const validPassword = user.comparePassword(req.body.password);
            } 
              if (!validPassword) {
                res.json({ success: false, message: 'password invalid' });
              } else {
                res.json({ success: true, message: 'User authenticated!'});
              }
          }
        });
     });
    return router;
  }
  // app.post("/user", async function (req, res) {
  //       user.firstname = userData.firstname
  //       user.lastname  = userData.lastname
  //       user.email  = userData.email
  //       user.address  = userData.address
  //       user.phone = userData.phone
  //       user.username = userData.username
  //       user.password = userData.password
  //   const userData = req.body;
  //   const user = new User(userData);
  //   try {
  //     const newUser = await user.save();
  //     res.status(200).json({ newUser });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ err: "Failed to save user" });
  //   }
  // });
