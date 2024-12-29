var fs = require('fs');

var stream = fs.createReadStream('./lambda.txt', 'utf8')

    stream.once('data', () => console.log('START'))
    stream.on('data', (chunk) => console.log(chunk.length))
    stream.on('end', () => console.log('END'))