//view for all flowers

var app = app || {};

app.allFlowersView = Backbone.View.extend({

	tagName: "section",

	render: function() {
	//look at items inside collection and calls addFlower on each item	
		this.collection.each(this.addFlower, this);
		//makes sure you can chain this render method with other methods
		return this;
	},

	addFlower: function(flower) {
		//applies singleFlowerView model to each instance
		var flowerView = new app.singleFlowerView ({model: flower});
		this.$el.append(flowerView.render().el);

	}

});