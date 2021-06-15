const express = require('express')
const port = 5500

const generateTitle = () => {
    return 'Node JS'
}

const app= express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

    const title = generateTitle()

    res.render('index', {
        pageTitle: title,
        pageBody: 'hello node'
    })
})
app.get('/kontakt', (req, res) => {
    res.send('kontakt')
})

app.listen(port)

// const handler = (req, res) => {
//     console.log('new user')
//     res.end('hey hi hello')
// }

// const server = http.createServer(handler)

// server.listen(port, (err) => {
//     if(err){
//         return console.log('something went wrong')
//     }
//     console.log('server is running')
// })



// const utils = require('./utils')

// utils.greeting()
// utils.add(5, 5)