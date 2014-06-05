define([
	'backbone',
	'communicator',
	'controllers/OvationWeb'
	],

	function( Backbone, Communicator, OvationWebController ) {
		'use strict';

		var App = new Backbone.Marionette.Application();

		/* Add initializers here */
		App.addInitializer( function () {

			Communicator.mediator.trigger("APP:START");
			
			var ovationWebController = new OvationWebController();

		});

		return App;
	});
