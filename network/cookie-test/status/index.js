const http = require('http');

http.createServer((req, res) => {
    if (req.url.match(/[0-9]{3}/)){
        const status = req.url.replace('/','')
        res.writeHead(status, {'Set-Cookie': `${status}=${status}`})
        res.write(status)
    }else {
        res.writeHead(200)
    }
    res.end()
}).listen(3000)
