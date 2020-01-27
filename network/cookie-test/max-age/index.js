const http = require('http');

http.createServer((req, res) => {
    const cookie =req.headers['cookie']
    if (!cookie || !cookie.length){
        res.writeHead(200, {'Set-Cookie': `name=123; max-age=60`})
    }
    res.write(`
        <script>document.write(document.cookie)</script>
    `)
    res.end()
}).listen(3000)
