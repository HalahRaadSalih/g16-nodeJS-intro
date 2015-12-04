var http = require("http");

function handleRequest(req,res){
	res.setHeader("Content-Type","text/plain");
	console.log(res);
	if(req.url === '/special-message'){
		res.end("You're Special!");
	}

	else if(req.url === '/non-special-message'){
		res.statusCode = 301;
		res.statusMessage = "Move Permentaly"
		res.end(res.statusMessage);
	}

	else{
		res.end(req.url);
	}
}

var server = http.createServer(handleRequest);

server.listen(8080);