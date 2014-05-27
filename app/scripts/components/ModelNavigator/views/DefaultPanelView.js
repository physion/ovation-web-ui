define([
	'backbone',
	'communicator',
	'hbs!../templates/DefaultPanelViewTemplate',
	'../models/EntityLinkModel'
	],
	function( Backbone, Communicator, DefaultPanelViewTemplate, EntityLinkModel ){
		'use strict';

		return Backbone.View.extend({

			className: 'model-navigator-panel',
			template: DefaultPanelViewTemplate,
			
			initialize: function() {
				this.$el.append(this.template());
			},

			'events': {
				'click .default-panel-projects': function() {
					this.trigger('show', 'projects')
				},
				'click .default-panel-sources': function() {
					this.trigger('show', 'sources')
				},
				'click .default-panel-protocols': function() {
					this.trigger('show', 'protocols')
				}
			}

		});
	});
