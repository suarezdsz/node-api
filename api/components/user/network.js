const express = require('express');

const router = express.Router();
const res = require('../../../network/response.js');

router.get('/', function(request, response){
    //response.send('all good');
    res.success(request, response, 'all good', 200);
});

module.exports = router;