SessionsTemplate.Views.GistForm = Backbone.View.extend({

  template: JST['gists/gist_form'],
	events: {
		"submit form": "createGist"
	},

	render: function() {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	},

	createGist: function(event) {
		event.preventDefault();
		console.log(event.target.form);
		var form = $("form").serializeJSON();
		var newGist = new SessionsTemplate.Models.Gist(form);
		newGist.set({favorites: new Array()});
		console.log(newGist);
		SessionsTemplate.Gists.create(newGist);
		Backbone.history.navigate('', {trigger: true});
	}

});