define([
	'backbone',
	'collections/Project',
	'collections/Source',
	'collections/Protocol'
	],
	function( Backbone, ProjectCollection, SourceCollection, ProtocolCollection ) {
		'use strict';

		/* Return a model class definition */
		return Backbone.Model.extend({
			initialize: function() {
				this.set('projects', new ProjectCollection());
				this.set('sources', new SourceCollection());
				this.set('protocols', new ProtocolCollection());
			},
			fetchProjects: function() {
				this.get('projects').fetch({ reset: true});
			},
			fetchSources: function() {
				this.get('sources').fetch({ reset: true });
			},
			fetchProtocols: function() {
				this.get('protocols').fetch({ reset: true });
			},
			defaults: {},

		});
	});
