const Appointment = require('../model/appointment');
const jwt = require('jsonwebtoken');


exports.addAppointmentController =  (req, res, next) => {
    console.log(req.headers.authorization);
    console.log('add app');
    console.log(req.body);
    Appointment.save({appointmentName : req.body.appName, patientName : req.body.patName, appointmentType : req.body.appType, appointmentSlot : req.body.appSlot, appointmentStatus: 'pending'}, () => {
        console.log('all done');
        res.json({message:'successful'})
    })
};

exports.searchAppointmentsController = (req, res, next) => {
    
    console.log('search app');
    Appointment.fetch((result) => {
        console.log('111');
        console.log(result)
        res.json(result)
    })
};

exports.updateController = (req, res, next) => {
    console.log(req.body);
    console.log(req.body.id);
    Appointment.update(req.body.id, () => {
        console.log('update all done');
        res.json({message:'updated'})
        
    })
}
