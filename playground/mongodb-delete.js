// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err)
  {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDB server');

  // //deleteMany
  //  db.collection('Users').deleteMany({name:'Sagar'});
//  deletOne

  //findOneAndDelete
 db.collection('Users').findOneAndDelete({name:'Amit'}).then((res)=>{
   console.log(res);
 });

  //db.close();
});
