var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(express.static('./public'))

app.get('/hello', (req, res) => {
    console.log(req.query)
    res.send('Hello World')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Form Submission')
})

app.listen(3000, () => {
    console.log('Server o http://localhost:3000')
})