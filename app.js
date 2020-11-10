const express = require('express');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const bodyParser = require('body-parser');
const path = require('path');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

// initialized ap
const app = express();


//setting constatns
const PORT = process.env.PORT || 3000;

// getting sequelize connection
const db = require('./config/database');


// check for the connection and performing tasks
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// handling handlebars
app.engine('handlebars',exphbs({defaultLayout : 'main',handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine','handlebars');

// body parser
app.use(bodyParser.urlencoded({extended:false}));

// setting static folder
app.use(express.static(path.join(__dirname,'public')));

// for home page
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/login',(req,res)=>{
  res.render('login');
});

app.get('/register',(req,res)=>{
  res.render('register');
});


// get pages
app.use('/records',require('./routes/records'));


app.listen(PORT,()=>{
    console.log(`Server running at port : ${PORT}`);
});
