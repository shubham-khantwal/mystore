const Sequelize = require('sequelize');
const path = require('path');
module.exports =  new Sequelize('pages','','', {
  //host: 'localhost',
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  storage : path.join(__dirname,'/../pages.db') 
});