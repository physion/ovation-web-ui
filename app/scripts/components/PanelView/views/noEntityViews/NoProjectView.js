define([
	'backbone',
	'hbs!../../templates/noEntityTemplates/noProjectViewTemplate'
	],
	function( Backbone, Template ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({

			tagName: 'div',
			className: 'no-project-view',
			template: Template,

			initialize: function(options) {
			},

			events: {
			},

			render: function() {
				this.$el.html(this.template());
			},

			onRender: function() {},

			onShow: function() {
				this.delegateEvents();
			}

		});

	});
