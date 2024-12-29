var fs = require('fs')

if(!fs.existsSync('rep')) {
    fs.mkdir('rep', (err) => {
        if(err) {
            console.log(err)
            throw err
        } else {
            console.log('Dir created successfully')
        }
    })
} else {
    console.log('Dir already exists')
}