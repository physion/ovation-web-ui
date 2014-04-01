define([
	'backbone',
	'../item/PanelEntityView',
	'hbs!../../templates/composite/EntitiesPanelViewTemplate'
	],
	function( Backbone, PanelEntityView, EntitiesPanelViewTemplate  ) {
		'use strict';

		/* Return a CompositeView class definition */
		return Backbone.Marionette.CompositeView.extend({
			className: 'model-navigator-panel',
			initialize: function() {
				console.log("initialize a Modelnavigatorentities CompositeView");
				this.$el.attr('data-cid', this.cid);
			},

			itemView: PanelEntityView,

			template: EntitiesPanelViewTemplate,


			/* ui selector cache */
			ui: {},

			/* where are we appending the items views */
			itemViewContainer: "ul",

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
