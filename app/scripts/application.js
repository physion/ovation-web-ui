define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
	'hbs!tmpl/ovation'
],

function( Backbone, Communicator, Welcome_tmpl, ovationTmpl ) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = ovationTmpl();
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
