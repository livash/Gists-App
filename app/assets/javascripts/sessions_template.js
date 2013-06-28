window.SessionsTemplate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
		SessionsTemplate.Gists = new SessionsTemplate.Collections.Gists();

		SessionsTemplate.Gists.fetch({
			success: function() {
				var $rootEl = $("#content");
				var router = new SessionsTemplate.Routers.Gists($rootEl, SessionsTemplate.Gists);
				Backbone.history.start();
			}
		});


  }
};

$(document).ready(function(){
  SessionsTemplate.initialize();
});
