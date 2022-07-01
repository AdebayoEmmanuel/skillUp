const mongoose = require('mongoose');
const config = require('config');
const dbConfig = config.get('Student.dbConfig.dbName');

mongoose.connect(dbConfig, {
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
