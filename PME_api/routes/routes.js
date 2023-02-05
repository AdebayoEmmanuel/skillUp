const express = require('express');
const router = express.Router();

// post endpoint
router.post('/post', (req, res) => {
    res.send('PME POST Endpoint');
});

//Get all records
router.get('/getAll', (req, res) => {
    res.send('PME GET All Records Endpoint');
});

//Get record by ID
router.get('/getOne/:id', (req, res) => {
    res.send('PME GET Record by ID Endpoint');
});

//Update record by ID





















module.exports = router;