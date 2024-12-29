const { error } = require('console')
var fs = require('fs')

//  var contentFile = fs.readFileSync('./server.js', 'utf8')
//  console.log(contentFile)

// fs.readdir('./', (err, files) => {
//     if(err) throw err

//     files.forEach((fileName) => {
//         var stat = fs.statSync(fileName)
//         // console.log(stat)
//         console.log(stat.isFile())
        
        
//     })
// })

fs.readdir('./', (err, files) => {
    if(err) throw err

    files.forEach((fileName) => {
        fs.readFile(fileName, 'utf8', (error, content) => {
            if(error) throw error

            console.log(`=============== ${fileName} ======================\n`)
            
            console.log(content)
            
        })
    })
})
 