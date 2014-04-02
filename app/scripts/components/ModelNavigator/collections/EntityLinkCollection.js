define([
	'backbone',
	'../models/EntityLinkModel'
	],
	function( Backbone, EntityLinkModel ) {
		'use strict';

		/* Return a collection class definition */
		return Backbone.Collection.extend({
			initialize: function() {},

			model: EntityLinkModel

		});
	});