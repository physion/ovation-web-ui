define([
	'backbone',
	'views/layout/ModelNavigator',
	'views/collection/Project',
	'views/collection/Source',
	'views/collection/Protocol'
],
function( Backbone, ModelNavigatorLayout, ProjectCollectionView, SourceCollectionView, ProtocolCollectionView ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {

			var self = this;

			this.model = options.model;
			this.region = options.region;

			this.modelNavigatorLayout = new ModelNavigatorLayout({
				model: this.model
			});

			// Initialize with the project view
			// TODO: Use a cookie to store the last view
			this.projectCollectionView = new ProjectCollectionView({
				collection: this.model.get('projects')
			});
			this.model.fetchProjects();

			// View button handlers
			this.modelNavigatorLayout.on('clicked:show-project-view', function() {
				this.model.fetchProjects();
			});

			this.modelNavigatorLayout.on('clicked:show-source-view', function() {
				self.model.fetchSources();
				self.sourceCollectionView = new SourceCollectionView({
					collection: this.model.get('sources')
				});
				self.modelNavigatorLayout.navigatorView.show(self.sourceCollectionView);
			});

			this.modelNavigatorLayout.on('clicked:show-protocol-view', function() {
				self.model.fetchProtocols();
				self.protocolCollectionView = new ProtocolCollectionView({
					collection: this.model.get('protocols')
				});
				self.modelNavigatorLayout.navigatorView.show(self.protocolCollectionView);
			});
		},

		render: function() {
			this.region.show(this.modelNavigatorLayout);
			this.modelNavigatorLayout.navigatorView.show(this.projectCollectionView);
		}

	});

});
