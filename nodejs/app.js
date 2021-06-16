require('./db/mongoose')
const User = require('./db/models/user')
const Recipe = require('./db/models/recipe')

const utils = require('./utils')
const mongoose = require('mongoose')
const express = require('express')
var router = express.Router();
var assert = require('assert')
var url = 'mongodb://localhost:27017/mongo-test'
var mongo = require('mongodb').MongoClient
const app = express()
const port = 5500

const findUsers = async () => {
    try {
        const users = await User.find({})
        return users
    } catch (error) {
        return error
    }
}

utils.createuser({
    name: 'admin',
    password: 'admin'
})
utils.createuser({
    name: 'user',
    password: 'asfd'
})
utils.createuser({
    name: 'xxx',
    password: 'qwer'
})
utils.createrecipe({
    name: 'Schabowy z ziemniakami i surówką',
    desc: 'Wez kotlet, ziemniaki, warzywa i to zrób.',
    author: 'admin'
})

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    const title = utils.generateTitle('Magazyn przepisów kulinarnych')
    res.render('index',{
        pageTitle: title
    })
})
app.get('/dodaj', (req, res) => {
    const title = utils.generateTitle('Dodaj przepis')
    // res.send('dodaj')
    res.render('dodaj',{
        pageTitle: title
    })
})
app.get('/zaloguj', (req, res) => {
    const title = utils.generateTitle('Zaloguj się')
    res.render('zaloguj',{
        pageTitle: title
    })
})
app.get('/zarejestruj', (req, res) => {
    const title = utils.generateTitle('Zarejestruj się')
    res.render('zarejestruj',{
    pageTitle: title
    })
})


app.get('/services', (req, res) => {
    var temp = Recipe.find({}).exec( (err, czlowiek) => {
        var title = "<table>"
        for (var i = 0; i < czlowiek.length; i++){
            title += "<tr><td>" + czlowiek[i].name + "</td><td>" + czlowiek[i].desc + "</td><td>" + czlowiek[i].author + "</td></tr>"
        }
        title += "</table>"
        res.render('services', {
            nazwa: 'name',
            haslo: 'password',
            przepisy: title
        })
    })
    
})

app.listen(port)
