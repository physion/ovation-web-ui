define([
	'backbone',
	'hbs!../../templates/layout/MainLayoutTemplate',
	'../addEntityViews/AddProjectView',
	'communicator'
	],
	function( Backbone, MainLayoutTemplate, AddProjectView, Communicator ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			className: 'panel-view-layout',

			template: MainLayoutTemplate,

			initialize: function() {
				Communicator.mediator.on('CreateEntity:Project', function() {
					$('#panel-view-add-modal').modal('hide');
				});
			},

			/* Layout sub regions */
			regions: {
				mainRegion: '.panel-view-main-region',
				historyRegion: '.panel-view-history-region',
				modalRegion: '.panel-view-modal-region'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {
				'click .history': function() {
					this.historyRegion.$el.slideToggle();
				},
				'click .home': function() {
					this.trigger('showHome');
				},
				'click .add': function() {
					$('#panel-view-add-modal').modal('show');
				}
			},

			/* on render callback */
			onRender: function() {},

			setAddEntityType: function(type) {
				switch(type) {
					case 'Project':
						var pView = new AddProjectView();
						this.modalRegion.show(pView);
				}
			},

			disableAdd: function() {
				this.$el.find('button.add:first').prop('disabled', true);
			},

			enableAdd: function() {
				this.$el.find('button.add:first').prop('disabled', false);
			}

		});

	});
