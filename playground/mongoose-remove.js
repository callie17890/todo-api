const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//Todo.findOneAndRemove

Todo.findByIdAndRemove('5a7887c92b93ee8eba063048').then((todo) => {
  console.log(todo);
});
