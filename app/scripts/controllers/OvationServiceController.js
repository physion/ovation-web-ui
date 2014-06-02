define([
		'backbone',
		'ovationApi'
	],
	function( Backbone, OvationAPI ) {

		var OvationServiceController = Backbone.Marionette.Controller.extend({

			initialize: function() {
				var self = this;

				OvationAPI.on("OvationAPI:login-needed", function() {
					self.trigger("login-needed");
				});

				OvationAPI.on("OvationAPI:authenticated", function() {
					self.trigger("authenticated");
				});

			},

			authenticate: function() {
				OvationAPI.authenticate();
			},

			login: function(email, password) {
				return OvationAPI.login(email, password);
			},

			getUserProjects: function() {
				return this.getPromiseForMethod(OvationAPI.Project.getUserProjects);
			},

			getUserSources: function() {
				return this.getPromiseForMethod(OvationAPI.Source.getUserSources);
			},

			getUserProtocols: function() {
				return this.getPromiseForMethod(OvationAPI.Protocol.getUserProtocols);
			},

			getPromiseForMethod: function(method) {
				var deferred = $.Deferred(),
					req = method();
				req.done(function(data) {
					deferred.resolve(data);
				});
				return deferred.promise();
			}

		});

		return new OvationServiceController();

	});