define([
	'backbone',
	'hbs!../../templates/item/HistoryItemViewTemplate',
	'communicator',
	],
	function( Backbone, HistoryItemViewTemplate, Communicator ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			tagName: 'li',
			className: 'history-item',
			template: HistoryItemViewTemplate,

			initialize: function() {},

			events: {
				'click': function() {
					Communicator.mediator.trigger('PanelHistory:click', this.model);
				}
			},

			onRender: function() {},

			onShow: function() {}

		});

	});
