var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app     = express();

const LISTEN_PORT = 3000;

app.get('/test', function(req, res) {
  res.send('Hello RES again - test is working!');
});

app.get('/', function(req, res) {
  res.send(generateStudents());
});

app.listen(LISTEN_PORT, function() {
  console.log('Accept HTTP resquests on port ' + LISTEN_PORT + '.');
});


function generateStudents() {
  var numberStudents = chance.integer({
    min : 0,
    max : 10
  });

  var students = [];

  for (var i = 0; i < numberStudents; ++i) {
    var gender    = chance.gender();
    var birthYear = chance.year({
      min : 1990,
      max : 2005
    });

    students.push({
      firstName : chance.first({
        gender : gender
      }),
      lastName : chance.last(),
      gender : gender,
      birthday : chance.birthday({
        year : birthYear
      })
    });
  }

  console.log(students);

  return students;
}
