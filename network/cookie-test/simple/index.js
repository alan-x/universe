const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Set-Cookie': 'name=123,123'})
    res.write(`
        <script>document.write(document.cookie)</script>
    `)
    res.end()
}).listen(3000)
