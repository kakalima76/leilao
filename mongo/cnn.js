const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Nieraldo:KuyBKkcFwKRpMLUL@cluster0-nzijl.gcp.mongodb.net/admin";
const client = new MongoClient(uri, { useNewUrlParser: true });

var lista = () => {
		client.connect(err => {
		const collection = client.db("usuario").collection("itens");
	 	collection.find({}).toArray(function(err, result) {
	    if (err) throw err;
	    return result.length;
		});

		client.close();
	});
}

var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

	client.connect(err => {
		const collection = client.db("usuario").collection("itens");
	 	collection.find({}).toArray(function(err, result) {
	    if (err) {
	    	throw err;
	    	reject(null);
	    }
	    resolve(result);
		});

		client.close();
  	});
});

// promise
// 	.then((data) => {
// 		console.log(data.length);
// 	})

module.exports = promise;