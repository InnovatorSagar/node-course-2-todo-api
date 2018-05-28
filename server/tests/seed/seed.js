const {ObjectID} = require('mongodb');

const {Todo} = require('./../../models/todo');


const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator :useroneId;
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed:true,
  completedAt:333,
  _creator:userTwoId
}];


var populateTodos = (done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(todos);
    done();
 });
};

module.exports = {todos,populateTodos};
