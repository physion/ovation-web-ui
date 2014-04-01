define([
	'backbone',
	'../models/EntityModel'
	],
	function( Backbone, EntityModel ) {
		'use strict';

		/* Return a collection class definition */
		return Backbone.Collection.extend({
			initialize: function() {
				console.log("initialize a Modelnavigatorentities collection");
			},

			model: EntityModel

		});
	});