define([
	'backbone',
	'hbs!tmpl/item/Project'
	],
	function( Backbone, ProjectTmpl  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			initialize: function() {},

			template: ProjectTmpl,


			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
