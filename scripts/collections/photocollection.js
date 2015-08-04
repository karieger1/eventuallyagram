var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var photomodel = require("../models/photomodel.js");

module.exports = Backbone.Collection.extend({
	model: photomodel
	url: "http://tiny-pizza-server.herokuapp.com/collections/tacotown-photos"

});