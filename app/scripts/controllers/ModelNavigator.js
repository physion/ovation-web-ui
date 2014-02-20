define([
	'backbone',
	'views/collection/Project',
	'views/layout/ModelNavigator'
],
function( Backbone, ProjectCollectionView, ModelNavigatorLayout ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {

			this.model = options.model;
			this.region = options.region;

			this.modelNavigatorLayout = new ModelNavigatorLayout({
				model: this.model
			});

			this.projectCollectionView = new ProjectCollectionView({
				collection: this.model.get('projects')
			});

			this.model.fetchProjects();

			this.modelNavigatorLayout.on('clicked:show-project-view', function() {
				this.model.fetchProjects();
			});
			this.modelNavigatorLayout.on('clicked:show-source-view', function() {
				this.model.fetchSources();
			});
			this.modelNavigatorLayout.on('clicked:show-protocol-view', function() {
				this.model.fetchProtocols();
			});
		},

		render: function() {
			this.region.show(this.modelNavigatorLayout);
			this.modelNavigatorLayout.navigatorView.show(this.projectCollectionView);
		}

	});

});
