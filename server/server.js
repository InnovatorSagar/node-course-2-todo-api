var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}= require('./models/user');

var app = express();
const port = process.env.PORT||3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
   var todo = new Todo({
     text:req.body.text,
     completed:req.body.completed
   });
   todo.save().then((doc)=>{
     res.send(doc);
   }).catch((e)=>{
     res.status(400).send(e);
   });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }).catch((e)=>{
    res.status(400).send(e);
  });
});

//GET /todos/numberid
app.get('/todos/:id',(req,res)=>{
 var id = req.params.id;
 //console.log(id);
 if(!ObjectID.isValid(id))
 {
   res.status(404).send();
 }

 Todo.findById(id).then((todo)=>{
   if(!todo){
    // console.log("Can't find a log");
   return res.status(404).send();
 }

    return res.send({todo});
   }).catch((e)=>res.status(400));
  });
app.listen(port,()=>{
  console.log('Started on port : ',port);
});

module.exports={app};
