const express = require('express');
const router  = express.Router();
const db = require('./../config/database');
const Record = require('./../models/Record');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// get pages list
router.get('/',(req,res)=>
Record.findAll()
    .then(records => {
        //console.log(records); 
        res.render('records',{
            records
        });
    })
    .catch(err => console.log(err))
);

// making adding data form
router.get('/add',(req,res)=>{
    res.render('add');
});

// add a page
router.post('/add',(req,res)=>{

    let {title , mapkeys , pagedata} = req.body;

    // insert into table
    mapkeys = mapkeys.toLowerCase().replace(/, /g , ',');
    Record.create({
        title,
        mapkeys,
        pagedata
    })
    .then(record => res.redirect('/records'))
    .catch(err=>console.log(err));
});

router.get('/search',(req,res)=>{
    let {term} = req.query;
    term = term.toLowerCase();
    Record.findAll({where : { mapkeys : { [Op.like]: '%'+term+'%'}}})
    .then(records =>res.render('records',{records}))
    .catch(err=>{
        console.log(err);
    });

});

module.exports = router;