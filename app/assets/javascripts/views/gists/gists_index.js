SessionsTemplate.Views.GistsIndex = Backbone.View.extend({

  template: JST['gists/index'],

	events: {
		"click button.favorite": "unfavorite",
		"click button.not-favorite": "favorite"
	},

	render: function() {
		var that = this;
		that.$el.html('');
		var renderedTemplate = this.template();
		that.$el.append(renderedTemplate);
		this.collection.each(function(gist) {
			var detailView = new SessionsTemplate.Views.GistDetail();
			detailView.model = gist;
			that.$el.append(detailView.render().$el);
		});
		return this;
	},

	unfavorite: function(event) {
		var that = this;
		var id = $(event.target).attr("data-id");
		var gist = this.collection.findWhere({id: parseInt(id)});
		$.ajax({
			url: "/gists/" + id + "/favorite",
			type: "delete",
			success: function() {
				gist.set({favorites: new Array()});

				that.render();
			}
		});
	},

	favorite: function() {
		var that = this;
		var id = $(event.target).attr("data-id");
		var gist = this.collection.findWhere({id: parseInt(id)});
		$.ajax({
			url: "/gists/" + id + "/favorite",
			type: "post",
			success: function(a,b,c) {
				gist.set({favorites: new Array(a)});

				that.render();
			}
		})
	}

});
