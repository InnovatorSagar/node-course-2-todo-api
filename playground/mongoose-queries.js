const {ObjectID}=require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

var id="5af434e4b7fe8a29580abeed";
//
// if(!ObjectID.isValid(id))
// {
//   console.log('Id not valid');
// }
//
// // Todo.find({
// //   _id : id
// // }).then((todos)=>{
// //   console.log('Todos',todos);
// // });
// //
// //
// // Todo.findOne({
// //   _id : id
// // }).then((todo)=>{
// //   console.log('Todo',todo);
// // });
//
//
// Todo.findById(id).then((todo)=>{
//   console.log('Todo by id',todo);
// }).catch((e)=>console.log(e));


User.findById(id).then((user)=>{
  if(!user)
  console.log('Unable to find');
  else {

  console.log(user);
}},(e)=>{
  console.log(e);
});
