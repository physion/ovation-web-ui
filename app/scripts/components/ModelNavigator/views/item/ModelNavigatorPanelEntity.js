define([
	'backbone',
	'hbs!../../templates/item/ModelNavigatorEntity'
	],
	function( Backbone, ModelNavigatorEntityTemplate  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			initialize: function() {
				console.log("initialize a Modelnavigatorentity ItemView");
			},
			
			template: ModelNavigatorEntityTemplate,
			

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
