require('./db/mongoose')
const User = require('./db/models/user')

const mongoose = require('mongoose')
const express = require('express')
const port = 5500



// const user = new User({ name: 'Tom', age: '61' })
// user.save().then(() => {
//     console.log(user)
// }).catch(error => {
//     console.log(error)
// })

const createuser = async (data) => {
    try {
        const user = new User(data)
        await user.save()

        console.log(user)
    } catch (error){
        console.log(error)
    }

    // user.save().then(() => {
    //     console.log(user)
    // }).catch(error => {
    //     console.log(error)
    // })
}

const findUsers = async () => {
    try {
        const users = await User.find({})
        console.log(users)
    } catch (error) {
        console.log(error)
    }
}

createuser({
    name: 'Kevin',
    age: 18
})

// findUsers()

// User.find({}).then((users) => {
//     console.log(users)
// })

// const mongo = require('mongodb')
// const mongoClient = mongo.MongoClient
// const ObjectID = mongo. ObjectID

// const url = 'mongodb://127.0.0.1:27017'
// const dbname = 'mongo-test'
// mongoClient.connect(url, {}, (error, client) => {
//     if(error){
//         console.log('Cannot connect to datbase')
//     }
    
//     console.log('Database connection is ok')

//     const db = client.db(dbname)

//     // db.collection('users').insertOne({
//     //     name: 'Janusz',
//     //     age: 48
//     // }, (error, result) => {
//     //     if (error){
//     //         console.log('Adding user error', error)
//     //     }
//     //     console.log(result.ops)
//     // })
//     // db.collection('users').insertMany([
//     //     {},
//     //     {}
//     // ])
//     // db.collection('users').find({
//     //     name: 'John'
//     // }).toArray((error, result) => {
//     //     console.log(result)
//     // })

//     // db.collection('users').find({}).toArray((error, result) => {
//     //     console.log(result)
//     // })

//     // db.collection('users').find({
//     //     age: { $gt: 25}
//     // }).toArray((error, result) => {
//     //     console.log(result)
//     // })

//     // db.collection('users').updateOne({
//     //     age: 21
//     // }, {
//     //     $set: {
//     //         age: 18
//     //     }
//     // })

//     // db.collection('users').updateMany({
//     //     age: 9
//     // }, {
//     //     $set: {
//     //         age: 24
//     //     }
//     // })

//     // db.collection('users').deleteOne({
//     //     name: 'Thormund'
//     // }, (error, result) => {
//     //     console.log(result)
//     // })


//     const id = new ObjectID("60c932401f048824e8501e53")
//     console.log(id.getTimestamp())

//     const id2 = new ObjectID()
//     console.log(id2.getTimestamp())

//     const id3 = new ObjectID()
//     console.log(id3.toHexString())
//     // db.collection('users').insertOne({
//     //     _id: id3,
//     //     name: 'Fred',
//     //     age: 39
//     // }, (error, result) => {
//     //     if (error){
//     //         console.log('Adding user error', error)
//     //     }
//     //     console.log(result.ops)
//     // })

//     db.collection('users').find({}).toArray((error, result) => {
//         console.log(result)
//     })

//     db.collection('users').findOne({
//         _id: new ObjectID('60c93c4daca2752d0cfb141e')
//     }, (error, result) => {
//         console.log(result)
//     })

//      console.log('Database connection is ok')
// })

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
//=========================================================================================
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