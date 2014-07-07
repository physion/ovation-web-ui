define([
	'backbone',
	'../item/EntityView',
	'hbs!../../templates/composite/EntitiesPanelViewTemplate',
	'communicator',
	],
	function( Backbone, EntityView, EntitiesPanelViewTemplate, Communicator ) {
		'use strict';

		return Backbone.Marionette.CompositeView.extend({

			className: 'entitiy-panel-view panel-view',
			itemView: EntityView,
			template: EntitiesPanelViewTemplate,

			initialize: function() {
				this.displayName = this.collection.at(0).get('type') + 's';
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
