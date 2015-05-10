var redRoses = new app.singleFlower({
	name: "Red Rose",
	price: 39.95,
	color: "Red",
	img: "js/images/flower.jpg",
	link: "redRose"

});

//these are missing components, will be filled out by singleFlowerModel.js
var rainbowRoses = new app.singleFlower({
	name: "Rainbow Rose",
	price: 29.95,
	color: "orange",
	link: "rainbowRose"

});

var heirloomRoses = new app.singleFlower({
	name: "Heirloom Rose",
	price: 19.95,
	img: "js/images/flower.jpg",
	link: "heirloomRose"

});

//starts the instantiation from collections.allFlowers.js (1 way of creating instances)
var flowerGroup = new app.FlowersCollection([
	redRoses, rainbowRoses, heirloomRoses	
]);

//collection view is assigned to a collection
var flowerGroupView = new app.allFlowersView({collection: flowerGroup});

//tells the app what model instances to display, executes the code to html, 
//targets that div tag in sample.html
$("#allFlowers").html(flowerGroupView.render().el);

//instantiates the routes for each model (aka link messages)
var flowerRouter = new app.Router();

//tells backbone to keep track of historical clicks so it works
Backbone.history.start();

//can add instances to array after it is set
//flowerGroup.add(heirloomRoses);

//can also remove them
//flowerGroup.remove(redRoses);

//console.log(flowerGroup.toJSON());
//changes the price for testing purposes, can change existing values
//or can add new key value pairs
//rainbowRoses.set('price', 20);

//console.log(heirloomRoses.toJSON());
//console.log(rainbowRoses.toJSON());
//console.log(redRoses.toJSON());