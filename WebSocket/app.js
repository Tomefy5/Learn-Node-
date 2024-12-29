var webSocketServer = require('ws').Server
var wss = new webSocketServer({port: 3000})

wss.on('connection', (ws) => {
    console.log('connected to server')
    ws.send('Welcome')

    ws.on('message', (message) => {
        wss.clients.forEach((client) => {
            client.send(message.toString())
        })
    })
})