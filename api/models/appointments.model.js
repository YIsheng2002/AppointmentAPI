const sql = require('./db');

//constructor
const Appointment = function(appointment){
    this.id = appointment.id;
    this.patientID = appointment.patientID;
    this.startTime = appointment.startTime;
    this.endTime = appointment.endTime;
    this.date = appointment.date;
    this.doctorID = appointment.doctorID;
    this.purpose = appointment.purpose;
}

Appointment.getAll = result => {
    let query = 'SELECT * FROM appointment';
    sql.query(query, (err, res) => {
        if(err){
            console.log('Error: ', err);
            result(null, err);
            return;
        }
        console.log('Appointments: ', res);
        result(null, res);
    });
}

module.exports = Appointment;