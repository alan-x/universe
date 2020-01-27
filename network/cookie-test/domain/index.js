const http = require('http');

http.createServer((req, res) => {
    const cookie =req.headers['cookie']
    const date = new Date();
    date.setMinutes(date.getMinutes()+1)
    if (!cookie || !cookie.length){
        res.writeHead(200, {'Set-Cookie': 'name=123;domain=example.com'})
    }
    res.write(`
        <script>document.write(document.cookie)</script>
    `)
    res.end()
}).listen(3000)
