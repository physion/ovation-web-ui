define([
	'backbone',
	'hbs!tmpl/item/Protocol'
	],
	function( Backbone, ProtocolTemplate  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			initialize: function() {
				console.log("initialize a Protocol ItemView");
			},
			
			template: ProtocolTemplate,
			
			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
