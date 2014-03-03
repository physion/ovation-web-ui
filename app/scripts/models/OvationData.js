define([
	'backbone',
	'collections/Project',
	'collections/Source'
	],
	function( Backbone, ProjectCollection, SourceCollection ) {
		'use strict';

		/* Return a model class definition */
		return Backbone.Model.extend({
			initialize: function() {
				this.set('projects', new ProjectCollection());
				this.set('sources', new SourceCollection());
			},
			fetchProjects: function() {
				this.get('projects').fetch({ reset: true});
			},
			fetchSources: function() {
				this.get('sources').fetch({ reset: true });
			},
			defaults: {},

		});
	});
