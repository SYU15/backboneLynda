//namespace the flowerApp

var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({
	//should look eo the app.singleFlower model when it starts to add instances
	model: app.singleFlower

});