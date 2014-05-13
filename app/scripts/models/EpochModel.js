define([
	'backbone'
	],
	function( Backbone ) {
		'use strict';

		/* Return a model class definition */
		return Backbone.Model.extend({
			initialize: function() {
				this.set("attributes", new Backbone.Model({
					"_id": "6f7cca39-3158-4998-bae6-3edd074b77dc",
					"_rev": null,
					"start": null,
					"end": null,
					"startZone": "America/New_York",
					"endZone": "America/New_York",
					"protocol_parameters" : {},
					"device_parameters" : {},
					"name": null
				}));
			},

			save: function() {
				var savedEpochs;
				if(!localStorage['epochs']) {
					savedEpochs = [];
				}
				else {
					savedEpochs = JSON.parse(localStorage['epochs']);
				}
				savedEpochs.push(this.toJSON());
				localStorage['epochs'] = JSON.stringify(savedEpochs);
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
				"type" : "Epoch",
				"access" : "write",
				"links" : {
					"owner" : {
					    "href" : "/api/v1/entities/14c1dd90-69b3-0131-a68a-12313d009d02",
					    "count" : 1
					},
					"parent" : {
					    "href" : "/api/v1/entities/a53a6be0-6823-4f0f-aa4f-44171dfaa7c4",
					    "count" : 1
					},
					"experiments" : {
					    "href" : "/api/v1/entities/6f7cca39-3158-4998-bae6-3edd074b77dc/experiments",
					    "count" : 0
					},
					"projects" : {
					    "href" : "/api/v1/entities/6f7cca39-3158-4998-bae6-3edd074b77dc/projects",
					    "count" : 1
					},
					"attachments" : {
					    "href" : "/api/v1/entities/6f7cca39-3158-4998-bae6-3edd074b77dc/attachments",
					    "count" : 0
					},
					"protocol" : {
					    "href" : "/api/v1/entities/6f7cca39-3158-4998-bae6-3edd074b77dc/protocol",
					    "count" : 0
					},
					"input_sources" : {
					    "Naprox_11-0030" : {
					        "href" : "/api/v1/entities/a1b862e3-ccf5-4bc1-a2b4-7ca5ce20fb65",
					        "count" : 1
					    },
					    "Naprox_11-0002" : {
					        "href" : "/api/v1/entities/0f9ee7e9-3a7b-41fa-922b-c4dded245f36",
					        "count" : 1
					    }
					},
					"output_sources" : {},
					"measurements" : {
					    "href" : "/api/v1/entities/6f7cca39-3158-4998-bae6-3edd074b77dc/measurements",
					    "count" : 0
					},
					"analysis_records" : {
					    "href" : "/api/v1/entities/6f7cca39-3158-4998-bae6-3edd074b77dc/analyses",
					    "count" : 0
					}
				}
			},

		});
});
