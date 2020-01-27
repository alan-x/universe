const http = require('http');

http.createServer((req, res) => {
    if (req.headers.host.startsWith('example')) {
        res.writeHead(200, {'Set-Cookie': `host=${req.headers.host};SameSite=None`})
    }
    if (req.headers.host.startsWith('localhost')) {
        res.write(`
            <a href="http://example.com:3000/index.html">http://example.com:3000/index.html</a>
            <form action="http://example.com:3000/form" method="post">
                <button>post</button>
            </form>
             <form action="http://example.com:3000/form" method="get">
                <button>get</button>
            </form>
            <script src="http://example.com:3000/script.js"></script>
            <img src="http://example.com:3000/img.jpg"/>
            <iframe src="http://example.com:3000/index.html"/>
            
        `)
    }
    res.end()
}).listen(3000)
