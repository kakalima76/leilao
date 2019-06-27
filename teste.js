var mongo = require('./mongo/cnn');

mongo.then((data) => console.log(data.length));