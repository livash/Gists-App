SessionsTemplate.Views.GistDetail = Backbone.View.extend({

  template: JST['gists/gist_detail'],

	render: function() {
		var renderedContent = this.template({
			gist: this.model,
			favorites: SessionsTemplate.Favorites
		});
		this.$el.html(renderedContent);
		return this;
	}

});
