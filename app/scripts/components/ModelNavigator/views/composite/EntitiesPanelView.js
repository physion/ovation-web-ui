define([
	'backbone',
	'communicator',
	'../item/PanelEntityView',
	'hbs!../../templates/composite/EntitiesPanelViewTemplate'
	],
	function( Backbone, Communicator, PanelEntityView, EntitiesPanelViewTemplate  ) {
		'use strict';

		/* Return a CompositeView class definition */
		return Backbone.Marionette.CompositeView.extend({
			className: 'model-navigator-panel',
			initialize: function() {
				this.listenTo(this, "itemview:entitylink:click", function(context, entityLinkModel) {
					context.$el.siblings().find('li').removeClass('active').end().removeClass('active');
					context.$el.addClass('active');
					Communicator.mediator.trigger("panel:click", {
						entityLinkModel: entityLinkModel,
						view: this
					});
				});
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
