define([
	'backbone',
	'../views/layout/MainLayout',
	'../views/DefaultPanelView',
	'../views/composite/EntitiesPanelView',
	'../views/collection/HistoryView',
	'ovationService',
	'communicator'
],
function( Backbone, MainLayout, DefaultPanel, EntitiesPanelView, HistoryView, OvationService, Communicator ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {

			var layout = this.layout = new MainLayout(),
				defaultPanel = this.defaultPanel = new DefaultPanel(),
				historyCollection = this.historyCollection = new Backbone.Collection(),
				self = this;

			options.region.show(layout);
			layout.historyRegion.show(new HistoryView({ collection: historyCollection }));
			this.showHomePanel();

			this.listenTo(layout, 'showHome', function() {
				this.showHomePanel();
			});

			this.listenTo(defaultPanel, 'show', function(type) {
				switch(type) {
					case 'projects':
						this.showProjectsPanel();
						break;
					case 'sources':
						OvationService.getUserSources().done(function(collection) {
							console.log(collection);
						});
						break;
					case 'protocols':
						OvationService.getUserProtocols().done(function(collection) {
							console.log(collection);
						});
						break;
				}
			});

			Communicator.mediator.on('PanelHistory:click', function(historyModel) {
				switch(historyModel.get('displayName')) {
					case 'Home':
						self.showHomePanel();
						break;
					case 'Projects':
						self.showProjectsPanel();
				}
			});

			this.listenTo(layout, 'CreateEntity', function(entity) {
				OvationService.createEntity(entity).done(function(data) {
					//TODO use EntityCollection
					self.layout.mainRegion.currentView.collection.add(data);
				});
			});

		},

		showHomePanel: function() {
			this.layout.mainRegion.show(this.defaultPanel);
			this.historyCollection.add(new Backbone.Model({
				displayName: 'Home',
				url: ''
			}));
			this.layout.disableAdd();
		},

		showProjectsPanel: function() {
			var self = this;
			OvationService.getUserProjects().done(function(collection) {
				self.layout.mainRegion.show(new EntitiesPanelView({ collection: collection, method: OvationService.getUserProjects }));
				self.historyCollection.add(new Backbone.Model({
					displayName: 'Projects',
					url: ''
				}));
				self.layout.setAddEntityType('Project');
				self.layout.enableAdd();
			});

		}

	});

});