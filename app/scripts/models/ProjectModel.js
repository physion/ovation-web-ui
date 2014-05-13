define([
	'backbone'
	],
	function( Backbone ) {
		'use strict';

		/* Return a model class definition */
		return Backbone.Model.extend({
			initialize: function() {
				this.set("attributes", new Backbone.Model({
					"_id": "bb1fda63-ee8a-46af-b986-958d924bfbcf",
					"_rev": null,
					"name": null,
					"purpose": null,
					"start": null,
					"startZone": "America/New_York",
					"tags" : {},
					"properties" : {},
					"notes" : {}
				}));
			},

			save: function() {
				var savedProjects;
				if(!localStorage['projects']) {
					savedProjects = [];
				}
				else {
					savedProjects = JSON.parse(localStorage['projects']);
				}
				savedProjects.push(this.toJSON());
				localStorage['projects'] = JSON.stringify(savedProjects);
			},

			toJSON: function() {
				var json = _.clone(this.attributes);
				for(var attr in json) {
					if((json[attr] instanceof Backbone.Model) || (json[attr] instanceof Backbone.Collection)) {
						json[attr] = json[attr].toJSON();   
					}
				}
				return json;
			},

			defaults: {
				"type" : "Project",
				"access" : "write",
				"links" : {
					"experiments" : {
						"href" : "/api/v1/entities/bb1fda63-ee8a-46af-b986-958d924bfbcf/experiments",
						"count" : 0
					},
					"projects" : {
						"href" : "/api/v1/entities/bb1fda63-ee8a-46af-b986-958d924bfbcf/projects",
						"count" : 1
					},
					"attachments" : {
						"href" : "/api/v1/entities/bb1fda63-ee8a-46af-b986-958d924bfbcf/attachments",
						"count" : 0
					},
					"owner" : {
						"href" : "/api/v1/entities/14c1dd90-69b3-0131-a68a-12313d009d02",
						"count" : 1
					},
					"analysis_records" : {
						"href" : "/api/v1/entities/bb1fda63-ee8a-46af-b986-958d924bfbcf/analyses",
						"count" : 0
					}
				}
			},

		});
	});
