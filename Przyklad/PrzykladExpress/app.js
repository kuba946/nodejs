const express = require('express');
const path = require('path');

const app = express(); // <- utworzenie serwera

app.listen(5500, () => {
    console.log('Serwer nasłuchuje');
});

app.use(express.static(
    path.join(__dirname, 'public')
));

app.get('/', (req, res) => {
    
});