var ws = new WebSocket('ws://localhost:3000')

ws.onopen = () => {
    setTitle('Connected to WebSocket')
}

ws.onclose = () => {
    setTitle('Disconnected from WebSocket')
}

ws.onmessage = (message) => {
    printMessage(message)
}

document.forms[0].onsubmit = () => {
    var input = document.getElementById('message')
    ws.send(input.value)
    input.value = ''
}

setTitle = (title) => {
    document.querySelector('h1').innerHTML = title
}

printMessage = (message) => {
    console.log(message.data)
    var p = document.createElement('p')
    p.innerText = message.data
    document.querySelector('div.messages').appendChild(p)
}