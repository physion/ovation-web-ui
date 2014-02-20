define([
	'backbone',
	'hbs!tmpl/layout/ModelNavigator'
	],
	function( Backbone, ModelNavigatorTmpl ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			className: 'model-navigator',
			template: ModelNavigatorTmpl,  

			initialize: function() {},

			regions: {
				navigatorView: '.navigator-view'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {
				'click .show-project-view': function() {
					this.trigger('clicked:show-project-view');
				},
				'click .show-source-view': function() {
					this.trigger('clicked:show-source-view');
				},
				'click .show-protocol-view': function() {
					this.trigger('clicked:show-protocol-view');
				}
			},

			/* on render callback */
			onRender: function() {}

		});

	});
