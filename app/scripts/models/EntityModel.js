define([
	'backbone'
	],
	function( Backbone ) {
		'use strict';

		return Backbone.Model.extend({

			initialize: function(options) {},

			parse: function(data, options) {
				var linksArray = [];
				if(data.attributes) {

					// Set attributes
					this.set('attributes', new Backbone.Model(data.attributes));

					// Set UI hints
					if(data.ui_hints.primary_link) {
						data.ui_hints.primary_link = new Backbone.Model(data.ui_hints.primary_link);
					}
					if(data.ui_hints.secondary_link) {
						data.ui_hints.secondary_link = new Backbone.Model(data.ui_hints.secondary_link);
					}
					this.set('ui_hints', new Backbone.Model(data.ui_hints));

					// Set links
					_.each(data.links, function(link, i) {
						link['display_name'] = i;
						linksArray.push(link);
					});
					this.set('links', new Backbone.Collection(linksArray));

				}
				delete data.attributes;
				delete data.links;
				delete data.ui_hints;
				return data;
			},

			toJSON: function() {
				var json = _.clone(this.attributes);
				for(var attr in json) {
					if((json[attr] instanceof Backbone.Model) || (json[attr] instanceof Backbone.Collection)) {
						json[attr] = json[attr].toJSON();
					}
				}
				return json;
			}

		});
	});
