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
					var userData = self.userData = OvationAPI.getUserData();
					self.trigger('authenticated');
					$.ajax({
						url: 'https://ovation-io-dev.cloudant.com/_session',
						type: 'POST',
						dataType: 'json',
						data: {
							name: userData['cloudant_key'],
							password: userData['cloudant_password']
						},
						xhrFields: {
							withCredentials:true
						}
					})
					.success(function(data) {
						if(data.ok) {
							self.changeHandler();
						}
					});
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
			},

			changeHandler: function(since) {
				var since = since || 0,
					self = this;
				function loop(){
					self.changeHandler(since);
				}
				$.ajax({
					url: this.userData['cloudant_db_url'] + '/_changes',
					dataType: 'json',
					data: {
						since: since,
						feed: 'longpoll'
					},
					xhrFields: {
						withCredentials:true
					}
				})
				.success(function(data) {
					if(since !== data.last_seq) {
						since = data.last_seq;
						console.log('change', data.results);
					}
					loop();
				})
				.error(function(data) {
					setTimeout(loop, 5000);
				});
			}

		});

		return new OvationServiceController();

	});