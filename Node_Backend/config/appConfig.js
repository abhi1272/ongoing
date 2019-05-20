let appConfig = {}

appConfig.port = 8080;
appConfig.allowedCrosOrigin = "*";
appConfig.env = 'dev';
appConfig.db = {
        uri: 'mongodb://localhost:27017/AwzingDB'
 //     uri: 'mongodb://abhi1272:abhi1272@ds133796.mlab.com:33796/todoapp'
}
appConfig.apiVersion = '/api/v1'

module.exports = {
    port: appConfig.port,
    allowedCrosOrigin:appConfig.allowedCrosOrigin,
    env: appConfig.env,
    db:appConfig.db,
    apiVersion:appConfig.apiVersion
}



