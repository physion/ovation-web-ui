define([
	'backbone',
	'../views/PanelsView',
	'../views/DefaultPanelView',
	'../views/composite/EntitiesPanelView',
	'communicator',
	'ovationService'
	],
	function( Backbone, PanelsView, DefaultPanelView, EntitiesPanelView, Communicator, OvationService ) {
		'use strict';

		return Backbone.Marionette.Controller.extend({

			initialize: function( options ) {

				// Region provided by parent
				var region = options.region,
					panelsView = this.panelsView = new PanelsView(),

					// Initialize the default panel to provide starting links for projects, sources, protocols
					defaultView = new DefaultPanelView(),
					self = this;

				// Show the default panel
				region.show(panelsView);
				panelsView.addPanel(defaultView);
				
				this.listenTo(defaultView, 'show', function(type) {
					var self = this;
					this.panelsView.clearPanels(defaultView);
					switch(type) {
						case 'projects':
							OvationService.getUserProjects().done(function(data) {
								self.addPanel(data);
							});
							break;
						case 'sources':
							OvationService.getUserSources().done(function(data) {
								self.addPanel(data);
							});
							break;
						case 'protocols':
							OvationService.getUserProtocols().done(function(data) {
								self.addPanel(data);
							});
							break;
					}
				});

				// Handler for entity link click
				Communicator.mediator.on('panel:click', function(eData) {

					self.panelsView.clearPanels(eData.view);

					var req = OvationService.getEntitiesWithUri(eData.entityLinkModel.get('href'));

					req.done(function(data) {
						var newPanel = new EntitiesPanelView({
							model: eData.entityModel,
							collection: data
						});
						self.panelsView.addPanel(newPanel);
					});

				});

			},

			addPanel: function(entitiesCollection, model) {
				var newPanel = new EntitiesPanelView({
					model: model,
					collection: entitiesCollection
				});
				this.panelsView.addPanel(newPanel);
			}

		});
	});
