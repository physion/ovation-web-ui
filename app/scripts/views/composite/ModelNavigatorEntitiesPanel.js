define([
	'backbone',
	'views/item/ModelNavigatorPanelEntity',
	'hbs!tmpl/composite/ModelNavigatorEntities'
	],
	function( Backbone, ModelNavigatorPanelEntityView, ModelNavigatorEntitiesTemplate  ) {
		'use strict';

		/* Return a CompositeView class definition */
		return Backbone.Marionette.CompositeView.extend({
			className: 'model-navigator-panel',
			initialize: function() {
				console.log("initialize a Modelnavigatorentities CompositeView");
				this.$el.attr('data-cid', this.cid);
			},

			itemView: ModelNavigatorPanelEntityView,

			template: ModelNavigatorEntitiesTemplate,


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
