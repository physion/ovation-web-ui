define([
	'backbone',
	'../views/PanelsView',
	'../views/DefaultPanelView',
	'../collections/EntitiesCollection',
	'../views/composite/EntitiesPanelView',
	'communicator'
	],
	function( Backbone, PanelsView, DefaultPanelView, EntitiesCollection, EntitiesPanelView, Communicator ) {
		'use strict';

		return Backbone.Marionette.Controller.extend({

			initialize: function( options ) {

				// Region provided by parent
				var region = options.region,
					panelsView = new PanelsView(),

					// Babysitter to manage panels
					viewBabysitter = new Backbone.ChildViewContainer(),

					// Initialize the default panel to provide starting links for projects, sources, protocols
					defaultView = new DefaultPanelView();

				// Show the default panel
				region.show(panelsView);
				viewBabysitter.add(defaultView);
				panelsView.viewContainerEl.append(defaultView.$el);
				
				// Handler for entity link click
				Communicator.mediator.on('panel:click', function(eData) {

					// When the user clicks a link we want to clear any existing panels after it
					var clickedPanelFound = false,
						viewsToRemove = [],
						i;

					viewBabysitter.each(function(view, i) {
						if(clickedPanelFound) {
							viewsToRemove.push(view);
						}
						else if(view.cid === eData.view.cid) {
							clickedPanelFound = true;
						}
					});
					for(i = 0; i < viewsToRemove.length; i++) {
						viewBabysitter.remove(viewsToRemove[i]);
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
									collection: entitiesCollection
								}),
								newContainerWidth;

							// Show panel
							newPanel.render();
							entitiesCollection.reset(data);
							viewBabysitter.add(newPanel);
							panelsView.viewContainerEl.append(newPanel.$el);
							newContainerWidth = newPanel.$el.outerWidth() * viewBabysitter.length;
							panelsView.viewContainerEl.width(newContainerWidth);
						}
					});
				});

			}
		});
	});
