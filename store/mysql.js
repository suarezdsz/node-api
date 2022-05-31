const mysql = require('mysql');
const { connect } = require('../api/components/user/network');

const config = require('../config');

const dbConfig  = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
};

//connection
let connection;

function handleConnection(){
    connection = mysql.createConnection(dbConfig);

    connection.connect((err)=>{
        if(err){
            console.log('error connection db ',err);
            setTimeout(handleConnection, 2000);
        }else{
            console.log('DB Connecter');
        }


    });

    
    connection.on('error', err=>{
        if(err.code == 'PROTOCOLO_CONNECTION_LOST'){
            handleConnection();
        }else{
            throw err;
        }
    });
};

handleConnection();