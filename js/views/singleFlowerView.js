var app = app || {};

//this is the view for a single model view, AKA one flower

app.singleFlowerView = Backbone.View.extend({

//defines which html tag this view will be tagged in
//also gives it a css class for styling
//these are optional, built in parameters
	tagName: "article",
	className: "flowerListItem",

	//shows where to populate in the html page, _.template is an underscore method
	template: _.template( $('#flowerElement').html() ),
	
	//renders the collection using the parameters previously defined

	render: function() {
		var flowerTemplate = this.template(this.model.toJSON());
		//el contains all properties defined above and passed it to backbone
		//in a neat package that can then have jQuery methods applied to it
		//refers to the article tag
		this.$el.html(flowerTemplate);
		return this;
	},

	events: {
		'mouseover': 'addBgColor',
		'mouseout': 'removeBgColor'
	},

	addBgColor: function () {
		//refers to this view's root method, which is the article tage
		this.$el.addClass('bgColorImage');
	},

	removeBgColor: function () {
		this.$el.removeClass('bgColorImage');
	}

});