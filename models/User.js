const Sequelize = require('sequelize');

// getting connection
const db = require('./../config/database');

// creating model
const User = db.define('user',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING   
    },
    password : {
        type : Sequelize.STRING
    }
})

module.exports = User;

