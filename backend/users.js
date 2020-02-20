const express=require('express');
const bodyParser=require('body-parser');
const Router =express.Router();
const con=require('./database_connection');
var sha256 = require('js-sha256');
var validator = require("email-validator");
var passwordValidator = require('password-validator');


var schema = new passwordValidator();

schema
    .is().min(6)
    .has().uppercase()
    .has().symbols();

var hash = sha256.create();
Router.get("/",(req,res)=>{

    if(!validator.validate(req.body.email)){
        throw new Error("email invalid");
    }
    if(schema.validate(req.body.pass)){
        throw new Error("Parola incorecta");
    }

    con.query("select * from users where email="+req.body.email+" and pass="+req.body.pass,
        (err,rows,fields)=>{
        if(err){
            res.statusCode=400;
        }
        else
            res.statusCode=200;
        })
})

module.exports =Router;