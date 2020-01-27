function simplifyPath(path) {
    path = path.split('/');
    let pathList = []

    path.forEach(p => {
        if (p === '..') {
            pathList.pop()
            return
        }
        if (p==='.'){
            return
        }
        if (p.length) {
            pathList.push(p)
        }

    })
    return '/' + pathList.join('/')
}

module.exports = simplifyPath