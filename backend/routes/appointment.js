const express = require('express');
const controller = require('../controller/appointment');
const auth = require('../token-authentication');

const router = express.Router();

// router.post('/add-appointment', auth, controller.addAppointmentController);

// router.get('/search-appointments',auth, controller.searchAppointmentsController);

router.post('/add-appointment', controller.addAppointmentController);

router.get('/search-appointments', controller.searchAppointmentsController);

router.post('/update', controller.updateController);



module.exports = router;


