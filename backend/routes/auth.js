const express = require('express');
const controller = require('../controller/auth');

const router = express.Router();


router.post('/access-key', controller.authController);


module.exports = router;