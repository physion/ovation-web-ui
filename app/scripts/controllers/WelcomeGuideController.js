define([
	'backbone',
	'views/layout/WelcomeGuideLayout',
	'views/WelcomeGuideStartView',
	'views/WelcomeGuideEntitiesView',
	'models/ProjectModel',
	'models/ExperimentModel',
	'models/EpochGroupModel',
	'models/EpochModel'
],
function( Backbone, WelcomeGuideLayout, WelcomeGuideStartView, WelcomeGuideEntitiesView, ProjectModel, ExperimentModel, EpochGroupModel, EpochModel) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var welcomeGuideLayout = new WelcomeGuideLayout();
			options.region.show(welcomeGuideLayout);

			var welcomeGuideStartView = new WelcomeGuideStartView();
			welcomeGuideLayout.main.show(welcomeGuideStartView);

			this.listenTo(welcomeGuideStartView, "createProject", function(projectData) {

				var startDate = new Date(projectData.startDate),
					newProject = new ProjectModel(),
					welcomeGuideEntitiesView = new WelcomeGuideEntitiesView();

				newProject.get("attributes")
					.set("name", projectData.name)
					.set("purpose", projectData.purpose)
					.set("start", startDate.toISOString());
				newProject.save();
				
				welcomeGuideLayout.main.show(welcomeGuideEntitiesView);

				this.listenTo(welcomeGuideEntitiesView, "createEntities", function(entityData) {

					var expStart = new Date(entityData.experiment.start),
						newExperiment = new ExperimentModel(),
						eGroupStart = new Date(entityData.epochGroup.start),
						eGroupEnd = new Date(entityData.epochGroup.end),
						newEpochGroup = new EpochGroupModel(),
						epochStart = new Date(entityData.epoch.start),
						epochEnd = new Date(entityData.epoch.end),
						newEpoch = new EpochModel();

					newExperiment.get('attributes')
						.set('name', entityData.experiment.name)
						.set('purpose', entityData.experiment.purpose)
						.set('start', expStart.toISOString());
					newExperiment.save();

					newEpochGroup.get('attributes')
						.set('name', entityData.epochGroup.name)
						.set('start', eGroupStart.toISOString())
						.set('end', eGroupEnd.toISOString());
					newEpochGroup.save();

					newEpoch.get('attributes')
						.set('name', entityData.epoch.name)
						.set('start', epochStart.toISOString())
						.set('end', epochStart.toISOString());
					newEpoch.save();

					this.trigger("showDataView");
				});
			});

		}
	});

});
