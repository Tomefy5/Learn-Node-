var fs = require('fs');
var http = require('http');

var data = require('./data/data.json');
var GlobalRes

// var server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type':'text/json'})
//     res.end(JSON.stringify(data));
// })
var server = http.createServer((req, res) => {
    GlobalRes = res

    if(req.url === '/') {
        
        res.writeHead(200, {'Content-Type': 'text/json' })
        res.end(JSON.stringify(data))

    } else if (req.url.match(/major$/)) {

        res.writeHead(200, {'Content-Type': 'text/json' })
        isMajor()

    } else if (req.url.match(/minor$/)) {

        res.writeHead(200, {'Content-Type': 'text/json' })
        isMinor()

    }  else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('404 Not Found')
    }
})

const isMajor = () => {
    var isMajor = data.filter((item) => {
        return item.age >= 18
    })

    GlobalRes.end(JSON.stringify(isMajor))
}

const isMinor = () => {
    var isMinor = data.filter((item) => {
        return item.age < 18
    })

    GlobalRes.end(JSON.stringify(isMinor))
}

server.listen(3000)
console.log('Server on http://localhost:3000')
