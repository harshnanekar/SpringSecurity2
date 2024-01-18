const express = require('express');
const app= express();
const router = require('./app/router/route.js');
const parser = require('body-parser');
const cookieParser = require('cookie-parser');
const { pgsql }= require('./app/config/database.js');
pgsql.connect();

app.set('view engine','ejs');
app.set('views','app/views/pages');

app.use(parser.json());
app.use(cookieParser());
app.use(parser.urlencoded({extended:true}));
app.use('/api',router);


app.get('/insertcookie/:id',(req,res) => {
    const cookieValue = req.params.id;
    res.cookie('cookie',cookieValue);
    res.json({message:"inserted"});
});

app.get('/getcookie',(req,res) => {
    const ckvalue = req.cookies.cookie;
    res.send({'cookie': ckvalue});
});
app.listen(8080);