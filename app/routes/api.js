const express         = require('express');
const router          = express.Router();
const User            = require('../models/user');
const Mountainbikes   = require('../models/mountainbikes');
const jwt             = require('jsonwebtoken');
const secret          = 'password';

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
      User
        .findOne({ username: req.body.username })
        .select('firstname lastname email address phone username password')
        .exec(function(err, user) {
          if(err) throw err;

          if(!user) {
            res.json({ success: false, message: 'User doesnt exist'});
          } else if (user) {
            const validPassword = user.comparePassword(req.body.password);
          // password blank errors out
            //  } else {
          //   res.json({ success: false, message: 'Empty password'});
          //  }
          if (!validPassword) {
            res.json({ success: false, message: 'password invalid' });
          } else {
            const token = jwt.sign({ firstname: user.firstname, lastname: user.lastname, email: user.email, address: user.address, phone: user.phone}, secret, { expiresIn: '24h'});
            res.json({ success: true, message: 'User authenticated!', token: token });
          }
      }
      });
    });

    router.use(function(req, res, next) {
      const token = req.body.token || req.body.query || req.headers['x-access-token'];
      if(token) {
        jwt.verify(token, secret, function(err, decoded) {
          if(err) {
            res.json({ success: false, message: 'token invalid'});
          } else {
            req.decoded = decoded;
            next();
          }
        });
      } else {
        res.json({ success: false, message: 'no token provided'});
      }
    });

    router.post('/profile', function(req, res) {
      res.send(req.decoded);
    });

  return router;
}
  // app.post("/user", async function (req, res) {
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
