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
				'click li': function(e) {
					var entityLinkModel = new EntityLinkModel(),
						$li = $(e.currentTarget);
					entityLinkModel.set('href', $li.attr('data-href'));
					$li.siblings().removeClass('active');
					$li.addClass('active');
					Communicator.mediator.trigger('panel:click', {
						entityLinkModel: entityLinkModel,
						view: this
					});
					return false;
				}
			}
		});
	});
