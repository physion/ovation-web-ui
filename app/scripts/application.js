define([
	'backbone',
	'communicator',
	'controllers/Service',
	'controllers/OvationWeb'
	],

	function( Backbone, Communicator, ServiceController, OvationWebController ) {
		'use strict';

		var App = new Backbone.Marionette.Application();

		/* Add initializers here */
		App.addInitializer( function () {

			Communicator.mediator.trigger("APP:START");

			// Service controller for intercepting ajax requests
			var serviceController = new ServiceController();
			
			var ovationWebController = new OvationWebController();

		});

		return App;
	});
