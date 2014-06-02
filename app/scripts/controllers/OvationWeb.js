define([
	'backbone',
	'views/layout/OvationWeb',
	'views/LoginView',
	'controllers/DataView',
	'ovationService'
],
function( Backbone, OvationWebLayout, LoginView, DataViewController, OvationService ) {
	'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function() {

			var self = this;

			this.layout = new OvationWebLayout({
				el: '#app-layout'
			}).render();

			this.listenToOnce( OvationService, 'login-needed', function() {
				if(!self.dataViewController) {
					self.layout.mainContent.show(new LoginView());
				}
			})

			this.listenToOnce( OvationService, 'authenticated' , function() {
				self.dataViewController = new DataViewController({
					region: self.layout.mainContent
				});
				self.stopListening( OvationService, 'login-needed');
				self.listenTo( OvationService, 'login-needed', function() {
					//TODO: add a login modal
				});
			});

			OvationService.authenticate();

		}

	});

});
