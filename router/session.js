const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/index');

router.route('/').get(sessionController.fetchEvents).post(sessionController.createEvent);

module.exports = router;