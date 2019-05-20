const appConfig = require('./../config/appConfig')

let requestIpLogger = (req,res,next) => {
	let remoteIp = req.connection.remoteAddress + '://' + req.connection.remotePort;
	let realIp = req.headers['X-REAL-IP'];
	console.log(req.method + "Request made from" + remoteIp + 'for route' + req.originalUrl);

	if(req.methods === 'OPTIONS'){
		console.log('!OPTIONS');
		var headers = {};

		headers["Access-Control-Allow-Origin"] = "*"
		headers["Access-Control-Allow-Methods"] = "POST , GET , DELETE ,OPTIONS";
		headers["Access-Control-Allow-Credentials"] = false;
		headers["Access-Control-Max-Age"] = '86400';
		headers["Access-Control-Allow-Headers"] = "X-Rated-Width ,X-HTTP-Method-Override,Content-Type,Accept"
		res.writeHead(200,headers);
		res.end();
	}
	else{
		res.header("Access-Control-Allow-Origin","*");
		res.header('Access-Control-Allow-Methods','POST , GET , DELETE ,OPTIONS');
		res.header('Access-Control-Allow-Headers',"Origin,X-Request-with,Content-Type,Accept")
		next();
	}
}

module.exports = {
	logIp:requestIpLogger
}