const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentDB', {
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