var User            = require('../models/user');
// var Mountainbikes   = require('../models/mountainbikes');
const { Router }    = require('express');

module.exports = 
    router.post('/user', function(req, res) {
        var user = new User();
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
            res.send('Username and password were provided');
        } else {
        user.save(function(err) {
            if(err) {
            res.send('Username or Email already exists!');
            }else {
            res.send('user created!');
            }
        });    
      }
    });
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
return router;