const express = require('express');

const router = express.Router();
const res = require('../../../network/response.js');
const controller = require('./index');
router.get('/', function(request, response){
    //response.send('all good');
    const listUser = controller.list();
    res.success(request, response, listUser, 200);
});

router.get('/:id', function(request, response){
    //response.send('all good');
    const listUser = controller.get('user',request.params.id);
    res.success(request, response, listUser, 200);
});

module.exports = router;