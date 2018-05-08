// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err)
  {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDB server');

 //
 // db.collection('Todos').insertOne({
 //   text:'Something is inserted',
 //   completed:false
 // },(err,result)=>{
 //   if(err){
 //     return console.log('Unable to insert todo ');
 //   }
 //
 //   console.log(JSON.stringify(result.ops,undefined,2));
 // });
 //

 db.collection('Users').insertOne({
   name:'Amit',
   age:257,
  location :'Indiana'
},(err,result) => {
   if(err)
   {
   return   console.log('Cant write to user collection');
   }
console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
 });
//
db.close();
});
