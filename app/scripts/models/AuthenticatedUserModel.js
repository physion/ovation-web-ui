define([
	'backbone',
	'jqueryCookie'
	],
	function( Backbone ) {
		'use strict';

		var AuthenticatedUser = Backbone.Model.extend({

			initialize: function() {},

			authenticate: function(email, password) {
				var self = this;
				if($.cookie('ovationUser')) {
					this.set(JSON.parse($.cookie('ovationUser')));
					return $.ajax({
						url: 'http://localhost:3000/project',
						type: 'GET',
						dataType: 'json',
						data: {
							'api-key': this.get("api_key")
						}
					})
					.done(function() {
						self.trigger("authenticated-user:authenticated");
					})
					.error(function() {
						this.trigger("authenticated-user:login-needed");
					});
				}
				else if(email && password) {
					return $.ajax({
  					url: 'https://dev.ovation.io/api/v1/sessions',
  					type: 'POST',
  					dataType: 'json',
  					data: {
    					'email': email,
    					'password': password
  					}
					})
					.done(function(data) {
						self.set(data);
						$.cookie('ovationUser', JSON.stringify(data));
						self.trigger("authenticated-user:authenticated");
					});
				}
				else {
					this.trigger("authenticated-user:login-needed");
				}
			},

			defaults: {
				"cloudant_key": null,
				"cloudant_password": null,
				"created_at": null,
				"email": null,
				"id": null,
				"name": null,
				"s3_access_key_id": null,
				"s3_bucket_url": null,
				"s3_secret_access_key": null,
				"updated_at": null,
				"uuid": null,
				"cloudant_db_url": null,
				"api_key": null
			}

		});

		return new AuthenticatedUser;
	});
