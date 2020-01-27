const ReactDOMServer = require('react-dom/server')
const React = require('react')
const App = require("../App")


let app = ReactDOMServer.renderToString(React.createElement(App, {name: "server render"}))
console.log(app)

const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer(function (request, response) {
    if (request.url === '/') {
        let data = JSON.stringify({'name': 'here'})
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(`
        <!doctype html>
            <html>
            <head>
                <title>FilterList</title>
                <link href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"></head>
            <body>
            <div id="app"><div>
            ${app}
            </div></div>
            <script>
                window.__INIT_DATA=${data}
            </script>
            <script type="text/javascript" src="bundle.js"></script></body>
            </html>
        `)
        response.end()
    } else {
        if (/\.js/.test(request.url)) {
            // js file
            response.writeHead(200, {'Content-Type': 'application/javascript'})
            fs.createReadStream(`/Users/lyx/Own/Javascript/react-study/0x016-server-render/dist/${request.url}`).pipe(response)
        } else {
            response.writeHead(404)
            response.end()
        }
    }
})
server.listen(4200)