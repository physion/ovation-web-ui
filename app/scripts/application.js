define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
	'hbs!tmpl/ovation',
	'controllers/service',
	'collections/project',
	'hbs!tmpl/project'
],

function( Backbone, Communicator, Welcome_tmpl, ovationTmpl, ServiceController, ProjectCollection, projectTmpl ) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {

		document.body.innerHTML = ovationTmpl();
		Communicator.mediator.trigger("APP:START");

		var serviceController = new ServiceController();
		var projects = new ProjectCollection();
		var projectNavigator = $('#accordion');

		projects.on('reset', function() {
			projects.each(function(project, i) {
				projectNavigator.prepend(projectTmpl(project.get('attributes')))
			});
		});

		projects.fetch({reset: true});

	});

	return App;
});
