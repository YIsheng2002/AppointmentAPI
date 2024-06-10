const express = require('express');
const router = express.Router();

const appointment = require('../controllers/appointment.controller');

router.get('/', appointment.findAll);

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products',
    });    
});

router.get('/user/:userId', (req, res, next) => {
    const id = req.params.userId;
    if(id === 'user'){
        res.status(200).json({
            message: 'This is the user appointments',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.get('/:appointmentId', (req, res, next) => {
    const id = req.params.appointmentId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:appointmentId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated appointment!'
    });
});

router.delete('/:appointmentId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted appointment!'
    });
});

module.exports = router;