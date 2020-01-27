const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Set-Cookie': 'name=ajax'})
    res.write(`
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script >
        axios.get('http://example.com:3000/', {
            withCredentials: true
        })
        </script>
    `)
    res.end()
}).listen(3000)
