const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cluster0.tmqoa.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
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
