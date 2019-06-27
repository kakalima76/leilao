var mongo = require('../mongo/cnn');


	var sendJsonResponse = function(res, status, content){
		res.status(status);
		res.json(content);
	}



	module.exports.listar = function(req, res){

		mongo
			.then((data) => {
				sendJsonResponse(res, 200, data);
			})
			.catch(() => {
				sendJsonResponse(res, 404, err);
			})
		
	}
