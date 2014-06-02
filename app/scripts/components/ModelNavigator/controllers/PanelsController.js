define([
	'backbone',
	'../views/PanelsView',
	'../views/DefaultPanelView',
	'../collections/EntitiesCollection',
	'../views/composite/EntitiesPanelView',
	'communicator',
	'ovationService'
	],
	function( Backbone, PanelsView, DefaultPanelView, EntitiesCollection, EntitiesPanelView, Communicator, OvationService ) {
		'use strict';

		return Backbone.Marionette.Controller.extend({

			initialize: function( options ) {

				// Region provided by parent
				var region = options.region,
					panelsView = this.panelsView = new PanelsView(),

					// Initialize the default panel to provide starting links for projects, sources, protocols
					defaultView = new DefaultPanelView();

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

					// When the user clicks a link we want to clear any existing panels after it
					var clickedPanelFound = false,
						viewsToRemove = [],
						i;

					this.viewSitter.each(function(view, i) {
						if(clickedPanelFound) {
							viewsToRemove.push(view);
						}
						else if(view.cid === eData.view.cid) {
							clickedPanelFound = true;
						}
					});
					for(i = 0; i < viewsToRemove.length; i++) {
						this.viewSitter.remove(viewsToRemove[i]);
						viewsToRemove[i].remove();
					}

					// Get the data for the next panel
					$.ajax({
						url: eData.entityLinkModel.get('href'),
						type: 'GET',
						dataType: 'json',
						success: function(data) {

							// Create a new collection for the returned entities
							var entitiesCollection = new EntitiesCollection(),
								// Initialize a panel view to display the entities
								newPanel = new EntitiesPanelView({
									model: eData.entityModel,
									collection: entitiesCollection
								}),
								newContainerWidth;

							// Show panel
							newPanel.render();
							entitiesCollection.reset(data);
							this.viewSitter.add(newPanel);
							panelsView.viewContainerEl.append(newPanel.$el);
							newContainerWidth = newPanel.$el.outerWidth() * this.viewSitter.length;
							panelsView.viewContainerEl.width(newContainerWidth);
						}
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
