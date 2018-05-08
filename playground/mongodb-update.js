// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err)
  {
    return console.log('Unable to connect to MongoDb server');
  }

  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('5af17bdf89c997eb3765a468')
// },{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal :false
// }).then((res)=>{
//   console.log(res);
// });
db.collection('Users').findOneAndUpdate({
  name:'Amit'
},{
  $set:{
    name:'Sagar'
  },
  $inc:{
    age:1
  }
},{
  returnOriginal:false
}).then((res)=>{
  console.log(res);
});

  //db.close();
});
