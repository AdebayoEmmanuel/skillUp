//external dependencies
const express = require('express');
const jwt = require('jsonwebtoken');
//instantiating express app
app = express();

const port = 3000;

app.get('/api/', (req, res)=>{
    res.json({
        message: 'Hey there! welcome to my API service'
    });
});

app.post('/api/posts', verifyToken, (req, res)=>{
    jwt.verify(req.token, 'secret key', (err, authData)=>{
        if(err)
        {
            res.sendStatus(403); //forbidden
        }
        else
        {
            res.json({
                message: 'Posts created...',
                authData
            });
        }
    });
});

app.post('/api/login', (req, res)=>{
    const user = 
    {
        id: 1,
        userName: 'John',
        email: 'john@example.com'
    };

    jwt.sign({user: user}, 'secretkey', (err,token)=>{
        res.json({token
        });
    });
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined')
    {
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken
        next()
    }else{
        res.send(403);//forbidden
    }
}

//define where to listen from
app.listen(port, (req, res)=>{
    console.log('listening on port %s', port);
});