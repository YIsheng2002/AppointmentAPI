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
    let query = 'SELECT * FROM appointments ORDER BY date ASC, startTime ASC';
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

Appointment.findByID = (appointmentID, result) => {
    let query = `SELECT * FROM appointments WHERE id = ${appointmentID}`;
    sql.query(query, (err, res)=>{
        if(err){
            console.log('Error: ', err);
            result(null, err);
            return;
        }
        console.log('Appointment: ', res);
        result(null, res);
    });
}

Appointment.create = (newAppointment, result) => {
    let query = `INSERT INTO appointments (patientID, startTime, endTime, date, doctorID, purpose) VALUES (${newAppointment.patientID}, '${newAppointment.startTime}', '${newAppointment.endTime}', '${newAppointment.date}', ${newAppointment.doctorID}, '${newAppointment.purpose}')`;
    sql.query(query, (err, res)=>{
        if(err){
            console.log('Error: ', err);
            result(null, err);
            return;
        }
        console.log('Appointment: ', res);
        result(null, res);
    });
}

Appointment.updateByID = (appointmentID, appointment, result) => {
    let query = `UPDATE appointments SET patientID = ${appointment.patientID}, startTime = '${appointment.startTime}', endTime = '${appointment.endTime}', date = '${appointment.date}', doctorID = ${appointment.doctorID}, purpose = '${appointment.purpose}' WHERE id = ${appointmentID}`;
    sql.query(query, (err, res)=>{
        if(err){
            console.log('Error: ', err);
            result(null, err);
            return;
        }
        console.log('Appointment: ', res);
        result(null, res);
    });
}

Appointment.removeByID = (appointmentID, result) => {
    let query = `DELETE FROM appointments WHERE id = ${appointmentID}`;
    sql.query(query, (err, res)=>{
        if(err){
            console.log('Error: ', err);
            result(null, err);
            return;
        }
        console.log('Appointment: ', res);
        result(null, res);
    });
}

module.exports = Appointment;