const { error } = require('console');
var fs = require('fs');

var content = `
    Nouveau contenu
`

// fs.writeFile('test.txt', content.trim(), (error, file) => {
//     if(error) throw error

//     console.log('File created')    
// })

fs.appendFile('test.txt', content.trim(), (err, file) => {
    if(err) throw err

    console.log('Content appends')    
})