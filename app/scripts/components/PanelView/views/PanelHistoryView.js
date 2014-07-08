define([
	'backbone',
	'communicator',
	'hbs!../templates/PanelHistoryViewTemplate'
	],
	function( Backbone, Communicator, PanelHistoryViewTemplate ){
		'use strict';

		return Backbone.View.extend({

			className: 'panel-history',
			template: PanelHistoryViewTemplate,
			
			initialize: function(options) {
				this.container = options.container;
				this.$el.append(this.template());
			},

			render: function() {
				var self = this;
				this.$el.empty();
				this.container.each(function(view) {
					self.$el.append('<span>' + view.displayName + '</span>');
				})
			},

			'events': {}

		});
	});
