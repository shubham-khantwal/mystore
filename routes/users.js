const express = require('express');
const router  = express.Router();
const User = require('./../models/User');
const Sequelize = require('sequelize');
// const passport = require('passport');

// const initializePassport = require('./../passport-config')
// initializePassport(passport);

const bcrypt = require('bcrypt');


router.get('/',(req,res)=>{
    // User.findAll()
    // .then(users => {
    //     //console.log(records); 
    //     res.render('records',{
    //         users
    //     });
    // })
    // .catch(err => console.log(err))
    res.render('register');
});
router.post('/signup',(req,res)=>{
    console.log("post of signup");
    bcrypt.hash(req.body.password,10, function (err,   hash) {
        User.create({
          name: req.body.name,
          email: req.body.email,
          password: hash
    })
  .then(user => res.redirect('/users/login'))
  .catch(err=>{
    res.redirect('/')
  });
});
});


router.get('/login',(req,res)=>{
    res.render('login');
});

router.post('/login',(req,res)=>{
    res.end();
});

module.exports = router;