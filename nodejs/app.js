var http = require('http')
const utils = require('./utils')
const express = require('express');
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const { ObjectID } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017/mongo-test';
const client = new MongoClient(url, { useUnifiedTopology: true });

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}));

app.get('/usuwanie', (req, res) => {

    // console.log(req)

    var id = new ObjectID(req.query.id);
    
    const db = client.db('mongo-test');
    const collection = db.collection('recipes');

    collection.deleteOne({
        _id: id
    }, (err, result) => {
        //console.log(result._id, id)
    })
    
    collection.find({}).toArray(function(err, recipe_list){
        assert.equal(err, null);
        res.render('usunieto', {'pageTitle': 'Przepis usunięty :) !', 'recipes': recipe_list})
    });
})

app.get('/usun', (req, res) => {
    const db = client.db('mongo-test');
    const collection = db.collection('recipes');
    
    //console.log(collection.findOne({}));

    collection.findOne({}).then(function(result) {
        //console.log(result.name)
    })

    collection.find({}).toArray(function(err, recipe_list){
        assert.equal(err, null);
        res.render('usun', {'pageTitle': 'Usuń przepis', 'recipes': recipe_list})
    });
})

app.get('/zarejestruj', (req, res) => {
    const db = client.db('mongo-test');
    const collection = db.collection('recipes');

    collection.findOne({}).then(function(result) {
        console.log(result.name)
    })

    collection.find({}).toArray(function(err, recipe_list){
        assert.equal(err, null);
        res.render('zarejestruj', {'pageTitle': 'Zarejestruj się', 'recipes': recipe_list})
    });
})

app.get('/zaloguj', (req, res) => {
    const db = client.db('mongo-test');
    const collection = db.collection('recipes');
    
    collection.findOne({}).then(function(result) {
        console.log(result.name)
    })

    collection.find({}).toArray(function(err, recipe_list){
        assert.equal(err, null);
        res.render('zaloguj', {'pageTitle': 'Zaloguj się', 'recipes': recipe_list})
    });
})

app.post('/dodaj', (req, res) => {
    var name = req.body.name;
    var desc = req.body.desc;
    var author = req.body.author;
    
    const db = client.db('mongo-test');
    const collection = db.collection('recipes');

    db.collection('recipes').insertOne({
        name: name,
        desc: desc,
        author: author
    })

    collection.findOne({}).then(function(result) {
        console.log(result.name)
    })
    
    collection.find({}).toArray(function(err, recipe_list){
        assert.equal(err, null);
        res.render('dodano', {'pageTitle': 'Dodano przepis :) !', 'recipes': recipe_list})
    });
})

app.get('/dodaj', (req, res) => {
    const db = client.db('mongo-test');
    const collection = db.collection('recipes');
    
    collection.findOne({}).then(function(result) {
        //console.log(result.name)
    })

    collection.find({}).toArray(function(err, recipe_list){
        assert.equal(err, null);
        res.render('dodaj', {'pageTitle': 'Dodaj przepis', 'name': '', 'desc': '', 'author': ''})
    });
})

app.get('/', (req, res) => {
    const db = client.db('mongo-test');
    const collection = db.collection('recipes');
    
    //console.log(collection.findOne({}));

    collection.findOne({}).then(function(result) {
        //console.log(result.name)
    })

    collection.find({}).toArray(function(err, recipe_list){
        assert.equal(err, null);
        res.render('index', {'pageTitle': 'Magazyn przepisów kulinarnych', 'recipes': recipe_list})
    });
})

app.get('/table', (req, res) => {
    const db = client.db('mongo-test');
    const collection = db.collection('users');
    
    collection.findOne({}).then(function(result) {
        console.log(result.name)
    })

    collection.find({}).toArray(function(err, user_list){
        assert.equal(err, null);
        res.render('table', {'users': user_list})
    }); 
})
//app.get('/',(req, res) => res.send ('Hello world'))


// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);

    app.listen(port, () => console.log(`listening ${port}!`))
});