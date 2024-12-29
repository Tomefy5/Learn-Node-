var spawn = require('child_process').spawn
var child = spawn('node', ['spawnedChild.js'])

child.stdout.on('data', (data) => {
    process.stdout.write(data)
})

process.stdin.on('data', data => {
    child.stdin.write(data)
    setTimeout(() => {
        process.exit()
    }, 1000)
})