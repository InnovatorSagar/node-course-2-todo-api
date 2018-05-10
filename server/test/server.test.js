const expect = require('expect');
const request = require('supertest');

var {app}= require('./../server.js');
var {Todo} = require('./../models/todo');

beforeEach((done)=>{
  Todo.remove({}).then(()=>done());
});
describe('Post /todos',()=>{
  it('Should create new todo',(done)=>{
    var text = 'Fuck off!!';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err)
      {
        return done(err);
      }

      Todo.find().then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e)=>done(e));
    });
  });

  it('Should not create todo with invalid data',(done)=>{
    var text ="";
    request(app)
    .post('/todos')
    .send({text})
    .expect(400)
    .end((err,res)=>{
      if(err){
      return done(err);}
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(0);
        done();
      }).catch((e)=>done(e));
    });
  });
});