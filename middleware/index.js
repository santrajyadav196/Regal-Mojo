
// all the middleware goes here

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
	if (req.isAuthenticated()){
		return next();
	}
	req.flash("error", "YOU NEED TO BE LOGIN/SIGN UP TO DO THAT!!");
	res.redirect("/");
}

module.exports = middlewareObj;

