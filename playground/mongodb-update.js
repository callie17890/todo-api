// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected successfully');

//   db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a75eceb294ca9b76cfcbf7f')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
_id: new ObjectID('5a75e33d105d3503b026195b')
}, {
$set: {
  name: 'new Callie'
},
$inc: {
  age: 1
}
}, {
returnOriginal: false
}).then((result) => {
console.log(result);
});

  // db.close();
});
