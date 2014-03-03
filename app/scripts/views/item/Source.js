define([
	'backbone',
	'hbs!tmpl/item/Source'
	],
	function( Backbone, SourceTemplate  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			tagName: 'li',

			initialize: function() {
				console.log("initialize a Source ItemView");
			},

			template: SourceTemplate,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
