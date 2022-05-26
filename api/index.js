const express = require('express');

const user = require('./components/user/network');
const config = require('../config');
const app = express();

app.use('/api/user', user);

app.listen(config.api.port, ()=>{
 console.log('listen api the port ', config.api.port);
});

