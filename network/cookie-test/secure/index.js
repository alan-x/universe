let https = require("https");
let http = require("http");
let fs = require("fs");

const options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.pem')
};

const app = (req, res) => {
    const cookie =req.headers['cookie']
    const date = new Date();
    date.setMinutes(date.getMinutes()+1)
    if (!cookie || !cookie.length){
        res.writeHead(200, {'Set-Cookie': 'name=123;secure'})
    }
    res.write(`
        <script>document.write(document.cookie)</script>
    `)
    res.end()
}

https.createServer(options, app).listen(443);
http.createServer(app).listen(80);
