define([
	'backbone',
	'models/Source'
],
function( Backbone, SourceModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		url: '/api/v1/sources',
		model: SourceModel,
		initialize: function() {
			console.log("initialize a Source collection");
		}
	});
});
