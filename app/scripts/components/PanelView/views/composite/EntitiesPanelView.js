define([
	'backbone',
	'../item/EntityView',
	'hbs!../../templates/composite/EntitiesPanelViewTemplate',
	'../noEntityViews/NoProjectView',
	'communicator',
	],
	function( Backbone, EntityView, EntitiesPanelViewTemplate, NoProjectView, Communicator ) {
		'use strict';

		return Backbone.Marionette.CompositeView.extend({

			className: 'entity-panel-view panel-view',
			itemView: EntityView,
			template: EntitiesPanelViewTemplate,

			initialize: function(options) {
				if(options.type === 'Project') {
					this.emptyView = NoProjectView;
				}
			},

			/* ui selector cache */
			ui: {},

			/* where are we appending the items views */
			itemViewContainer: ".list-group",

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}

		});

	});
