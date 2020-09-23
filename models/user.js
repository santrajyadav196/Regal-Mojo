var mongoose = require("mongoose");
var passportLocalMonggose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: {type: String, unique: true, required: true},
	email: {type: String, unique: true, required: true},
	contact:{type: Number, required: true},
	birthday: {
	  day: {type: Number},
	  month: {type: Number},
	  year: {type: Number}
	  },
	password: String,
	resetPasswordToken: String,
	resetPasswordExpires: Date
});

UserSchema.plugin(passportLocalMonggose);
module.exports = mongoose.model("User", UserSchema);