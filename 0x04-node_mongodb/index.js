require('./models/db');
require('dotenv').config(); 
const port = process.env.PORT || 3000;


//global dependencies remember to npm --save all these dependencies
const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');


const studentController = require('./controllers/studentController')

//create express app
var app = express();

app.use(bodyparser.urlencoded({extended:false}))
//tell body parser to pass content to and fro mongodb using json encoding
app.use(bodyparser.json());

//get command to get result
app.get('/', (req,res)=>{
    res.send(`
        <h2>Welcome to Students Database!!</h2>
        <h3>Click here to get access to the <b> <a href="/student/list">Database</a></b></h3>
        `);
});

app.set('views', path.join(__dirname, '/views/'))
//separating content from layout using express handlebar, similar to what xcode does with swift mobile app dev
app.engine('hbs', exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: 'hbs',
    defaultLayout: 'MainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}))

//view engine for handlebar
app.set('view engine','hbs');

//listen on port
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

app.use("/student", studentController);