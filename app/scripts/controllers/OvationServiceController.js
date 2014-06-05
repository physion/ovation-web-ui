define([
		'backbone',
		'ovationApi',
		'models/EntityModel',
		'collections/EntityCollection'
	],
	function( Backbone, OvationAPI, EntityModel, EntityCollection) {

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

			getEntitiesWithUri: function(uri) {
				var deferred = $.Deferred(),
					req = OvationAPI.Entity.getEntitiesWithUri(uri),
					self = this;
				req.done(function(data) {
					deferred.resolve(self.convertToBackbone(data));
				});
				return deferred.promise();
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
					req = method(),
					self = this;
				req.done(function(data) {
					deferred.resolve(self.convertToBackbone(data));
				});
				return deferred.promise();
			},

			convertToBackbone: function(data) {
				var collection = new EntityCollection( data, {parse: true} );
				return collection;
			}

		});

		return new OvationServiceController();

	});