const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next)
{
    res.send('Api is working propering');
});

module.exports = router;