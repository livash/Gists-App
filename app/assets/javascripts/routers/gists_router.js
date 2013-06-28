SessionsTemplate.Routers.Gists = Backbone.Router.extend({

	initialize: function($rootEl, gists) {
		this.$rootEl = $rootEl;
		this.gists = gists;
	},

	routes: {
		"": "index"
	},

	index: function() {
		console.log("in the router");
		var view = new SessionsTemplate.Views.GistsIndex();
		view.collection = this.gists;
		this.$rootEl.html(view.render().$el);
	}

});
