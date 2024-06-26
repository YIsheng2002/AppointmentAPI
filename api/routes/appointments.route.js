const express = require('express');
const router = express.Router();

const appointment = require('../controllers/appointment.controller');

router.get('/', appointment.findAll);

router.post('/', appointment.create);

router.get('/:appointmentID', appointment.findByID);

router.patch('/:appointmentID', appointment.update);

router.delete('/:appointmentID', appointment.delete);

module.exports = router;