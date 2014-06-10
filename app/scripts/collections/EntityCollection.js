define([
	'backbone',
	'models/EntityModel'
	],
	function( Backbone, EntityModel ) {
		'use strict';

		return Backbone.Collection.extend({

			model: EntityModel

		});
	});