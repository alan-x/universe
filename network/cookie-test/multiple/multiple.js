const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Set-Cookie', ['cookie1=1','cookie1=2','cookie2=2','cookie3=3'])
    res.end()
}).listen(3000)
