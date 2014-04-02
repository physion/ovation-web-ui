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
				'click a': function(e) {
					var entityLinkModel = new EntityLinkModel();
					entityLinkModel.set('href', $(e.currentTarget).attr('href'));
					Communicator.mediator.trigger('panel:click', {
						entityLinkModel: entityLinkModel,
						view: this
					});
					return false;
				}
			}
		});
	});
