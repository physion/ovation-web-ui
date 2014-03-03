define([
	'backbone',
	'views/item/Project'
	],
	function( Backbone, ProjectView  ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.CollectionView.extend({
			
			tagName: 'ul',

			initialize: function() {},

			itemView: ProjectView,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {}
		});

	});
