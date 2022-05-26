exports.success = function(request, response, message, status){
    let statusCode = status || 200;
    let statusMessage = message || '';

    response.status(statusCode).send({
        error: false,
        status: status,
        body: message
    });
}

exports.error = function(request, response, message, status){
    let statusCode = status || 500;
    let statusMessage = message || 'Internet Server Error';

    response.status(statusCode).send({
        error: false,
        status: status,
        body: message
    });
}