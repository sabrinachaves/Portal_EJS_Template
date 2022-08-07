const exp = require('constants');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('index', {
        title: 'Página inicial',
        links: [
            {href: '/', label: 'Página inicial'},
            {href: '/livros', label: 'Livros'},
            {href: '/series', label: 'Séries de TV'}
        ]
    });
});

app.get('/livros', (req, res)=>{
    res.render('books', {
        title: 'Livros favoritos',
        links: [
            {href: '/', label: 'Página inicial'},
            {href: '/livros', label: 'Livros'},
            {href: '/series', label: 'Séries de TV'}
        ]
    })
});

app.get('/series', (req, res)=>{
    res.render('tv-shows', {
        title: 'Séries de TV favoritas',
        links: [
            {href: '/', label: 'Página inicial'},
            {href: '/livros', label: 'Livros'},
            {href: '/series', label: 'Séries de TV'}
        ]
    })
});


app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});