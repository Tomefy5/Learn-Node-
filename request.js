var fs = require('fs');
var https = require('https');

var options = {
    hostname: 'fr.wikipedia.org',
    port: 443,
    path: '/wiki/Node.js',
    method: 'GET'
}

var req  = https.request(options, (res) => {
    var bodyResponse = ''

    // console.log(res.statusCode);
    // console.log(res.headers);
    
    res.setEncoding('utf8');
    console.log(res);

    res.on('data', (chunk) => {
        console.log(chunk.length)
        bodyResponse += chunk
    })
    
    res.on('end', () => {
        fs.writeFile('wiki.html', bodyResponse, () => {
            console.log('File created successfully');
        })
    })
})

req.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});

req.end()