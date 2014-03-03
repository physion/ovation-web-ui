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
				'click .show-project-view': function(e) {
					this.setActiveButton(e.currentTarget);
					this.trigger('clicked:show-project-view');
				},
				'click .show-source-view': function(e) {
					this.setActiveButton(e.currentTarget);
					this.trigger('clicked:show-source-view');
				},
				'click .show-protocol-view': function(e) {
					this.setActiveButton(e.currentTarget);
					this.trigger('clicked:show-protocol-view');
				}
			},

			setActiveButton: function(button) {
				this.$el.find('.navigator-controls:first').find('.active').removeClass('active');
				$(button).addClass('active');
			},

			/* on render callback */
			onRender: function() {}

		});

	});
