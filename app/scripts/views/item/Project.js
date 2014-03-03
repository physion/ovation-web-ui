define([
	'backbone',
	'hbs!tmpl/item/Project'
	],
	function( Backbone, ProjectTemplate  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			initialize: function() {},
			
			template: ProjectTemplate,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
