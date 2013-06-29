SessionsTemplate.Routers.Gists = Backbone.Router.extend({

	initialize: function($rootEl, gists) {
		this.$rootEl = $rootEl;
		this.gists = gists;
	},

	routes: {
		"": "index",
		"gists/new": "new"
	},

	index: function() {
		console.log("in the router");
		var view = new SessionsTemplate.Views.GistsIndex();
		view.collection = this.gists;
		this.$rootEl.html(view.render().$el);
	},

	new: function() {
		var formView = new SessionsTemplate.Views.GistForm();
		this.$rootEl.html(formView.render().$el);
	}

});
