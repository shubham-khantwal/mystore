const Sequelize = require('sequelize');

// getting connection
const db = require('../config/database');

// creating model
const Record = db.define('record',{
    title: {
        type : Sequelize.STRING
    },
    mapkeys : {
        type : Sequelize.STRING   
    },
    pagedata : {
        type : Sequelize.STRING
    }
})

module.exports = Record;

