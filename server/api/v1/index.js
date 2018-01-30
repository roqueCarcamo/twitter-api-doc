const express = require('express');
const router = express.Router();
const twests = require('./tweets/routes');
const users = require('./users/routes');

router.use('/tweets', twests);
router.use('/users', users);

module.exports = router;