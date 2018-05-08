// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err)
  {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDB server');
//   db.collection('Todos').find({}).toArray().then((docs)=>{
//   console.log('TODOS');
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('Error in fetching the details');
// });
// db.collection('Todos').count().then((count)=>{
// console.log(`Todos count : ${count}`);
// },(err)=>{
// console.log('Error in fetching the details');
// });

db.collection('Users').find({location:'India'}).toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to fetch');
});
db.close();
});
