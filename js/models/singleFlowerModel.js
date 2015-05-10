//Namespace the app, make sure variable on this 
//page don't conflict with variable on other pages

var app = app || {};

//assigns default property to model, each instance will have these by default
app.singleFlower = Backbone.Model.extend({

//can be customized later by instance
	defaults: {
		color: "pink",
		img: "js/images/flower.jpg"

	},

//this is called when the app starts up
//also calls values from instances created
	/*initialize: function() {
		console.log("A model instance named " + this.get("name") + " has been created and it costs " + this.get("price"));
	
//looks for changes in the model
	this.on('change', function(){
		console.log("Something in our model has changed");
	});

//shows more specific changes for price, looking specifically for price, nothing else
	this.on("change:price", function(){
		console.log("The price of " + this.get("name")+ " model just changed to $" + this.get("price"));
	});	
	
	}*/
});