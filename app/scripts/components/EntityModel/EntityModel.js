define([
	'backbone'
	],
	function( Backbone ) {
		'use strict';

		return Backbone.Model.extend({

			initialize: function(options) {
				this.set('attributes', new Backbone.Model());
				this.set('ui_hints', new Backbone.Model());
				this.set('links', new Backbone.Model());
				this.set('named_links', new Backbone.Model());
			},

			parse: function(data, options) {
				var linksArray = [];
				if(data.attributes) {

					// Set attributes
					this.get('attributes').set(data.attributes);

					// Set UI hints
					if(data.ui_hints.primary_link) {
						data.ui_hints.primary_link = new Backbone.Model(data.ui_hints.primary_link);
					}
					if(data.ui_hints.secondary_link) {
						data.ui_hints.secondary_link = new Backbone.Model(data.ui_hints.secondary_link);
					}
					this.get('ui_hints').set(data.ui_hints);

					// Set links
					this.get('links').set(data.links);

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
				delete json.ui_hints;
				return json;
			}

		});
	});
