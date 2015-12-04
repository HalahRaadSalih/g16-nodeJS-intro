var http = require("http");

function handleRequest(req,res){
	res.setHeader("Content-Type","text/plain");

	if(req.url === '/special-message'){
		res.end("You're Special!");
	}

	else if(req.url === '/non-special-message'){
		res.end("You're boring!");
	}

	else{
		res.end(req.url);
	}
}

var server = http.createServer(handleRequest);

server.listen(8080);