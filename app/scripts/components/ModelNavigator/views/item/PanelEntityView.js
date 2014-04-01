define([
	'backbone',
	'hbs!../../templates/item/EntityViewTemplate'
	],
	function( Backbone, EntityViewTemplate  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			initialize: function() {},
			
			template: EntityViewTemplate,
			

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
