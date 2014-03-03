define([
	'backbone',
	'models/Protocol'
],
function( Backbone, ProtocolModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		url: '/api/v1/protocols',
		model: ProtocolModel,
		initialize: function() {
			console.log("initialize a Protocol collection");
		}
	});
});
