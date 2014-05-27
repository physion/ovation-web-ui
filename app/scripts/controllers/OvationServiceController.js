define([
		'backbone',
		'models/AuthenticatedUserModel'
	],
	function( Backbone, AuthenticatedUserModel ) {

		var OvationServiceController = Backbone.Marionette.Controller.extend({

			initialize: function() {
				this.authUser = AuthenticatedUserModel;
			},

			getUserProjects: function() {
				var deferred = $.Deferred();
				$.ajax({
					url: 'http://localhost:3000/project',
					type: 'GET',
					dataType: 'json',
					data: {
						'api-key': this.authUser.get('api_key')
					},
					success: function(data) {
						deferred.resolve(data);
					}
				});
				return deferred.promise();
			},

			getUserSources: function() {
				var deferred = $.Deferred();
				$.ajax({
					url: 'http://localhost:3000/source',
					type: 'GET',
					dataType: 'json',
					data: {
						'api-key': this.authUser.get('api_key')
					},
					success: function(data) {
						deferred.resolve(data);
					}
				});
				return deferred.promise();
			},

			getUserProtocols: function() {
				var deferred = $.Deferred();
				$.ajax({
					url: 'http://localhost:3000/protocol',
					type: 'GET',
					dataType: 'json',
					data: {
						'api-key': this.authUser.get('api_key')
					},
					success: function(data) {
						deferred.resolve(data);
					}
				});
				return deferred.promise();
			}

		});

		return new OvationServiceController();

	});