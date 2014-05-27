define([
	'backbone',
	'views/layout/OvationWeb',
	'views/LoginView',
	'models/AuthenticatedUserModel',
	'controllers/DataView',
],
function( Backbone, OvationWebLayout, LoginView, AuthenticatedUserModel, DataViewController ) {
	'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function() {

			this.layout = new OvationWebLayout({
				el: '#app-layout'
			}).render();

			this.listenToOnce(AuthenticatedUserModel, 'authenticated-user:login-needed', function() {
				if(!this.dataViewController) {
					this.layout.mainContent.show(new LoginView());
				}
			});

			this.listenToOnce(AuthenticatedUserModel, 'authenticated-user:authenticated', function() {
				this.dataViewController = new DataViewController({
					region: this.layout.mainContent
				});
				this.stopListening(AuthenticatedUserModel, 'authenticated-user:login-needed');
				this.listenTo(AuthenticatedUserModel, 'authenticated-user:login-needed', function() {
					//TODO: add a login modal
				});
			});

			AuthenticatedUserModel.authenticate();

		}

	});

});
