const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/sendMessage');

router.post('/send-message', sendMessage);

module.exports = router;
