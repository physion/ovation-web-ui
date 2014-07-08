define([
	'backbone',
	'communicator',
	'hbs!../templates/DefaultPanelViewTemplate'
	],
	function( Backbone, Communicator, DefaultPanelViewTemplate ){
		'use strict';

		return Backbone.View.extend({

			className: 'default-panel-view panel-view',
			template: DefaultPanelViewTemplate,
			
			initialize: function() {
				this.displayName = 'Home';
				this.$el.append(this.template());
			},

			'events': {
				'click .projects': function() {
					this.trigger('show', 'projects');
					return false;
				},
				'click .sources': function() {
					this.trigger('show', 'sources');
					return false;
				},
				'click .protocols': function() {
					this.trigger('show', 'protocols');
					return false;
				}
			},

			onShow: function() {
				this.delegateEvents();
			}

		});
	});
