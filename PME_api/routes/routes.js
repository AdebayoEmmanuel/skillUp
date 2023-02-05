const express = require('express');
const router = express.Router();
const Model = require('../models/model')

// post endpoint
router.post('/post', (req, res) => {
    res.send('PME POST Endpoint')
});

//Get all records
router.get('/getAll', (req, res) => {
    res.send('PME GET All Records Endpoint')
});

//Get record by ID
router.get('/getOne/:id', (req, res) => {
    res.send('PME GET Record by ID Endpoint')
});

//Update record by ID
router.patch('/update/:id', (req, res) => {
    res.send('PME UPDATE by ID Endpoint')
});

//Delete record by ID
router.delete('/delete/:id', (req, res) => {
    res.send('PME DELETE by ID Endpoint')
});





















module.exports = router;