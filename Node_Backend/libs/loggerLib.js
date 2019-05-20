let logger = require('pino')()
let moment = require('moment')

let captureError  = (errorMessage,errorOrigin,errorLevel) =>{

    let currentTime = moment();

    let errorResponse = {
        timeStamp:currentTime,
        errorMessage:errorMessage,
        errorOrigin:errorOrigin,
        errorLevel:errorLevel
    }
    logger.error(errorResponse)
    return errorResponse
}

let captureInfo = (Message,Origin,Level) =>{

    let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    let infoResponse = {
        timeStamp:currentTime,
        infoMessage:Message,
        infoOrigin:Origin,
        infoLevel:Level
    }

    logger.info(infoResponse)
    return infoResponse

}

module.exports = {
    captureError:captureError,
    captureInfo:captureInfo
}



