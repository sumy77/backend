var Message = require('../models/Message');

module.exports = {
	get: function(req, res) {
		Message.find({}).exec(function(err, result){
			res.send(result);
		});
	},
	post: function(req, res){
		var message = new Message(req.body);
		message.save();
		res.status(200);
	}
}