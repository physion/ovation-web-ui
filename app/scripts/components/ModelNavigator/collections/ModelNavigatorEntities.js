define([
	'backbone',
	'../models/ModelNavigatorEntity'
	],
	function( Backbone, ModelNavigatorEntity ) {
		'use strict';

		/* Return a collection class definition */
		return Backbone.Collection.extend({
			initialize: function() {
				console.log("initialize a Modelnavigatorentities collection");
			},

			model: ModelNavigatorEntity

		});
	});