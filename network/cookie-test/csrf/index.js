const http = require('http');

let totalMoney = 100000
const history = []

http.createServer((req, res) => {
    const [_, path, name, money] = (String(req.url) || '').match(/\/(\w+)(?:\?name=(\w+))?(?:&money=(\w+))?/) || []
    const cookie = req.headers['cookie']
    switch (path) {
        case 'login': {
            if (!cookie || !cookie.length) {
                res.writeHead(200, {'Content-Type': 'text/html'})
                if (name) {
                    res.writeHead(301, {'Location': '/index', 'Set-Cookie':`name=${name}`})
                    break;
                }
            } else {
                res.writeHead(301, {'Location': '/index'})
                break
            }

            res.write(`
                <form action="login">
                    <input type="text" name="name" placeholder="name">
                    <button>login</button>
                </form>       
            `)
            break
        }
        case 'transfer': {
            const cookie = req.headers['cookie']
            const loginName = cookie.split('=')[1]
            history.push(`${loginName} -> ${name}: ${money}`)
            totalMoney = totalMoney - money
            res.writeHead(200)
            res.write(`
                <h1>Successful!!</h1>
                <hr>
                <a href="/login?name=${loginName}">back to index</a>
            `)
            break;
        }
        case 'index': {
            if (!cookie || !cookie.length) {
                res.writeHead(301, {'Location':'/login'})
                break;
            }
            console.log(cookie)
            const loginName = cookie.split('=')[1]
            res.write(`<h1>welcome ${loginName} : ${totalMoney}</h1>`)
            res.write(`<hr/>`)
            res.write(history.map(h => `<p>${h}</p>`).join(''))
            res.write(`
                <form action="transfer">
                    <input type="text" name="name" placeholder="name">
                    <input type="text" name="money" placeholder="money">
                    <button>tansfer</button>
                </form>       
            `)
        }
    }
    res.end()
}).listen(3000)
