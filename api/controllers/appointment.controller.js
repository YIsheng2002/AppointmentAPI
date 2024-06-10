const Appointment = require('../models/appointments.model');

exports.findAll = (req, res) => {
    Appointment.getAll((err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving appointments.'
            });
        } else {
            res.send(data);
        }
    });
}

exports.findByPatientID = (req, res) => {
    Appointment.findByPatientID(req.params.patientID, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving appointments.'
            });
        } else {
            res.send(data);
        }
    });
}

exports.findByID = (req, res) => {
    Appointment.findByID(req.params.appointmentID, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving appointments.'
            });
        } else {
            res.send(data);
        }
    });
}

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    const appointment = new Appointment({
        patientID: req.body.patientID,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        date: req.body.date,
        doctorID: req.body.doctorID,
        purpose: req.body.purpose
    });

    Appointment.create(appointment, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the appointment.'
            });
        } else {
            res.send(data);
        }
    });
}

exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    Appointment.updateByID(req.params.appointmentID, new Appointment(req.body), (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occurred while updating the appointment.'
            });
        } else {
            res.send(data);
        }
    });
}

exports.delete = (req, res) => {
    Appointment.removeByID(req.params.appointmentID, (err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving appointments.'
            });
        } else {
            res.send(data);
        }
    });
}