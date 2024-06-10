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