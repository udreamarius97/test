const mysql=require('./database_connection');
const express= require('express');
const bodyParser=require('body-parser');
const peopleRoutes=require('./users');
const con=require('./database_connection');

var app=express();
app.use(bodyParser.json());

app.use("/addUser",peopleRoutes);

app.listen(3000);