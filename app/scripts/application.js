define([
	'backbone',
	'communicator',
	'controllers/OvationWeb',
	'controllers/service'
	],

	function( Backbone, Communicator, OvationWebController, MockjaxController ) {
		'use strict';

		var App = new Backbone.Marionette.Application();

		/* Add initializers here */
		App.addInitializer( function () {

			//var mockjax = new MockjaxController();

			Communicator.mediator.trigger("APP:START");
			
			var ovationWebController = new OvationWebController();

		});

		return App;
	});
