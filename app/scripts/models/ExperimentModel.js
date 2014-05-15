define([
	'backbone'
	],
	function( Backbone ) {
		'use strict';

		/* Return a model class definition */
		return Backbone.Model.extend({
			initialize: function() {
				this.set("attributes", new Backbone.Model({
					"_id": "a53a6be0-6823-4f0f-aa4f-44171dfaa7c4",
					"_rev": null,
					"start": null,
					"startZone": "America/New_York",
					"protocolParameters": {},
					"deviceParameters": {},
					"purpose": null,
					"name": null
				}));
			},

			save: function() {
				var savedExperiments;
				if(!localStorage['experiments']) {
					savedExperiments = [];
				}
				else {
					savedExperiments = JSON.parse(localStorage['experiments']);
				}
				savedExperiments.push(this.toJSON());
				localStorage['experiments'] = JSON.stringify(savedExperiments);
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
				"type" : "Experiment",
				"access" : "write",
				"links" : {
					"owner" : {
						"href" : "/api/v1/entities/14c1dd90-69b3-0131-a68a-12313d009d02",
						"count" : 1
					},
					"experiments" : {
						"href" : "/api/v1/entities/a53a6be0-6823-4f0f-aa4f-44171dfaa7c4/experiments",
						"count" : 0
					},
					"projects" : {
						"href" : "/api/v1/entities/a53a6be0-6823-4f0f-aa4f-44171dfaa7c4/projects",
						"count" : 1
					},
					"attachments" : {
						"href" : "/api/v1/entities/a53a6be0-6823-4f0f-aa4f-44171dfaa7c4/attachments",
						"count" : 0
					},
					"protocol" : {
						"href" : "/api/v1/entities/a53a6be0-6823-4f0f-aa4f-44171dfaa7c4/protocol",
						"count" : 0
					},
					"equipment_setup" : {
						"href" : "/api/v1/entities/a53a6be0-6823-4f0f-aa4f-44171dfaa7c4/equipment_setup",
						"count" : 0
					},
					"epoch_groups" : {
						"href" : "/api/v1/entities/a53a6be0-6823-4f0f-aa4f-44171dfaa7c4/epoch_groups",
						"count" : 0
					},
					"epochs" : {
						"href" : "/api/v1/entities/a53a6be0-6823-4f0f-aa4f-44171dfaa7c4/epochs",
						"count" : 0
					},
					"analysis_records" : {
						"href" : "/api/v1/entities/a53a6be0-6823-4f0f-aa4f-44171dfaa7c4/analyses",
						"count" : 0
					}
				}
			},

		});
});
