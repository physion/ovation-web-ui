define([
	'backbone'
	],
	function( Backbone ) {
		'use strict';

		return Backbone.Model.extend({

			initialize: function(options) {
				if(this.get('attributes') === undefined) {
					this.set('attributes', new Backbone.Model());
				}

				if(this.get('ui_hints') === undefined) {
					this.set('ui_hints', new Backbone.Model());
				}

				if(this.get('links') === undefined) {
					this.set('links', new Backbone.Model());
				}

				if(this.get('named_links') === undefined) {
					this.set('named_links', new Backbone.Model());
				}
			},

			parse: function(data, options) {

				if(data.attributes) {

					if(this.get('attributes') === undefined) {
						this.set('attributes', new Backbone.Model());
					}
					this.get('attributes').set(data.attributes);

					if(this.get('ui_hints') === undefined) {
						this.set('ui_hints', new Backbone.Model());
					}
					this.get('ui_hints').set(data.ui_hints);

					if(this.get('links') === undefined) {
						this.set('links', new Backbone.Model());
					}
					this.get('links').set(data.links);

					if(this.get('named_links') === undefined) {
						this.set('named_links', new Backbone.Model());
					}
					this.get('named_links').set(data.named_links);

				}

				delete data.attributes;
				delete data.ui_hints;
				delete data.links;
				delete data.named_links;
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
