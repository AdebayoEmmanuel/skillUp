const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DB_CONN_STR, {
    useNewUrlParser: true
},
err => {
    if (!err) {

        console.log('CONNECTION SUCCESSFUL')
    } else 
    {
        console.log('Error connecting to DB: ' + err)
    }
});

require('./student.model')