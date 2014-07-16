define([
		'backbone',
		'ovationApi',
		'EntityModel',
		'EntityCollection',
		'controllers/OvationServiceIndex'
	],
	function( Backbone, OvationAPI, EntityModel, EntityCollection, OvationServiceIndex) {

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
					var dataCollection = self.convertToBackbone(data),
						returnCollection = new EntityCollection();
					dataCollection.each(function(model, i) {
						returnCollection.add(OvationServiceIndex.addOrGetModel(model));
					});
					deferred.resolve(returnCollection);
				});
				return deferred.promise();
			},

			convertToBackbone: function(data) {
				return new EntityCollection( data, {parse: true} );
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
						_.each(data.results, function(change, i) {
							if(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/.test(change['id'])) {
								console.log(change);
							}
							else if(/[a-fA-F0-9]{32}/.test(change['id'])) {
								console.log(change);
							}
						})
					}
					loop();
				})
				.error(function(data) {
					setTimeout(loop, 5000);
				});
			},

			createProject: function(project) {
				var deferred = $.Deferred(),
					self = this;
				OvationAPI.Project.createProject(project).done(function(data) {
					var dataCollection = self.convertToBackbone(data),
						returnCollection = new EntityCollection();
					dataCollection.each(function(model, i) {
						returnCollection.add(OvationServiceIndex.addOrGetModel(model));
					});
					deferred.resolve(returnCollection);
				});
				return deferred.promise();
			},

			deleteEntity: function(entityModel) {
				var deferred = $.Deferred(),
					self = this;
				OvationAPI.Entity.deleteEntity(entityModel.get('_id'))
					.done(function() {
						entityModel.destroy();
					//TODO: also delete from the model index
				});
				return deferred.promise();
			},

			saveEntity: function(entity) {
				var deferred = $.Deferred(),
					self = this,
					saveData = entity.toJSON();
				delete saveData.ui_hints;
				OvationAPI.Entity
					.saveEntity(saveData)
					.done(function(data) {
						deferred.resolve(data);
					});
				return deferred.promise();
			},

			createEntity: function(entity) {
				var deferred = $.Deferred(),
					self = this;
				OvationAPI.Entity
					.createEntity(entity.toJSON())
					.done(function(data) {
						deferred.resolve(data);
					});
				return deferred.promise();
			}

		});

		return new OvationServiceController();

	});