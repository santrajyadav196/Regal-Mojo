var express = require("express");
var router = express.Router();
var middleware = require("../middleware");

//dahboards routes
router.get("/", middleware.isLoggedIn, function(req, res){
	res.render("dashboards/index");
});


module.exports = router;
