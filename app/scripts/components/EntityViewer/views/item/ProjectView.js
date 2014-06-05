define([
	'backbone',
	'hbs!../../templates/item/ProjectViewTemplate',
	'jqueryui'
	],
	function( Backbone, ProjectViewTemplate ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			tagName: 'div',

			initialize: function() {},

			template: ProjectViewTemplate,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {

			},

			onShow: function() {
				var start = new Date(this.model.get('attributes').get('start'));
				this.$el.find('.project-start')
					.datepicker()
					.datepicker("setDate", start);
			}
		});

	});
