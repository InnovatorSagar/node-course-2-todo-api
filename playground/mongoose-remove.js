const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//
// Todo.findOneAndRemove({
//   text:'Hero hai sagar'
// }).then(()=>{
//
// });

Todo.findByIdAndRemove("5afdd1ce7a7fddf285f3cb8c").then((res)=>{
  console.log(res);
});
