const express = require('express');
const app = express(); // <- utworzenie serwera

app.listen(5500, () => {
    console.log('Serwer nasłuchuje');
});

//czytanie
app.get('/', (req, res) => {
    console.log('Wyswietlanie strony');
    
});

app.get('/:id', (req, res) =>{
    console.log('Pobieranie REST elementu o id');
});

//Dodawanie
app.post('/', (req, res) => {
    console.log('Dodanie')
})

//Aktualizacja
app.patch('/:id',(req, res) =>{
    console.log('Aktualizacja REST elementu o id');
});

//Zastępowanie
app.put('/:id',(req, res) =>{
    console.log('Zastąpienie REST elementu o id nowym');
});

//Usunięcie
app.delete('/:id',(req) =>{
    console.log('Usunięcie REST elementu o id');
});


