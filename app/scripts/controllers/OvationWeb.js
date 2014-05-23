define([
	'backbone',
	'views/layout/OvationWeb',
	'views/LoginView',
	'models/OvationData',
	'models/AuthenticatedUserModel',
	'controllers/DataView',
	'controllers/WelcomeGuideController'
],
function( Backbone, OvationWebLayout, LoginView, OvationDataModel, AuthenticatedUserModel, DataViewController, WelcomeGuideController ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {

			var self = this,
				authUser = this.authUser = AuthenticatedUserModel,
				layout = this.layout = new OvationWebLayout({
					el: '#app-layout'
				}).render();

			this.listenToOnce(authUser, 'authenticated-user:login-needed', function() {
				var loginView = new LoginView();
				layout.mainContent.show(loginView);
				//TODO: rebind login-needed handler to some kind of overlay
			});

			this.listenToOnce(authUser, 'authenticated-user:authenticated', function() {
				this.loadDataView();
			});

			authUser.authenticate();
		},

		loadDataView: function() {
			var self = this;
			var ovationWebLayout = self.layout;
			$.ajax({
				url: 'http://localhost:3000/project?api-key=' + this.authUser.get("api_key"),
				dataType: 'json',
				success: function(data) {
					if(!data.length) {
						var welcomeGuideController = new WelcomeGuideController({
							region: ovationWebLayout.mainContent
						});

						self.listenTo(welcomeGuideController, "showDataView", function() {
							var dataViewController = new DataViewController({
								model: ovationDataModel,
								region: ovationWebLayout.mainContent
							});
						});
					}
					else {
						var ovationDataModel = new OvationDataModel();
						var dataViewController = new DataViewController({
							model: ovationDataModel,
							region: ovationWebLayout.mainContent
						});
					}
				}
			});
		}

	});

});
