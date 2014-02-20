define([
	'backbone',
	'collections/Project',
	],
	function( Backbone, ProjectCollection ) {
		'use strict';

		/* Return a model class definition */
		return Backbone.Model.extend({
			initialize: function() {
				this.set('projects', new ProjectCollection());
			},
			fetchProjects: function() {
				this.get('projects').fetch({ reset: true});
			},
			defaults: {},

		});
	});
