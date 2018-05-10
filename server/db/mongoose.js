var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB.URI||'mongodb://localhost:27017/TodoApp');


module.exports={
  mongoose
};
