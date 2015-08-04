var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("backbone/node_modules/underscore");

$(document).ready(function(){


	var userModel = require("./models/usermodel.js");
	var userCollection = require("./collections/usercollection.js");

	var commentModel = require("./models/commentmodel.js");
	var commentCollection = require("./collections/commentcollection.js");

	var photoModel = require("./models/photomodel.js");
	var photoCollection = require("./collections/photocollection.js");

	var userList = new userCollection();
	var photoList = new photoCollection();
	var commentList = new commentCollection();

	});

	var Pages = Backbone.Router.extend({
		routes: {
			"" : "login",
			"login": "login",
			"register": "register",
			"home": "home"
		},


	})
