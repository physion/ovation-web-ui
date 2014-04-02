define([
	'backbone',
	'communicator',
	'hbs!../../templates/item/EntityLinkViewTemplate',
	],
	function( Backbone, Communicator, EntityLinkViewTemplate ) {
		'use strict';

		return Backbone.Marionette.ItemView.extend({

			initialize: function() {},
			
			template: EntityLinkViewTemplate,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {
				'click': function(e) {
					this.trigger("entitylink:click", this.model);
					return false;
				}
			},

			/* on render callback */
			onRender: function() {}
		});

	});
