var app = app || {};


app.Router = Backbone.Router.extend({

//configured using key value pairs, route is left, custom method that will run on right
	routes :{
	//no copy is how you get to homepage route	
		"": "noCopy",
		//these links match the model instances link value in flowerApp.js
		"heirloomRose":"heirloomRoseMessage",
		"rainbowRose": "rainbowRoseMessage",
		"redRose": "redRoseMessage"

	},

	noCopy: function() {
		$("#copy").html("");
	},
	heirloomRoseMessage: function() {
		$("#copy").html("Heirloom Roses suck.");
	},
	rainbowRoseMessage: function() {
		$("#copy").html("Rainbow Roses are ok.");
	},
	redRoseMessage: function() {
		$("#copy").html("Red roses are pretty but smell like feet.");
	}

});