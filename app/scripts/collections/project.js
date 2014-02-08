define([
	'backbone',
	'models/project'
],
function( Backbone, ProjectModel ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		url: '/api/v1/projects',
		model: ProjectModel,
		initialize: function() {
			console.log("initialize a Project collection");
		}
	});
});
