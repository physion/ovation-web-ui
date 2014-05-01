define([
	'backbone',
	'communicator',
	'hbs!../../templates/item/EntityViewTemplate',
	'../../collections/EntityLinkCollection',
	'../collection/EntityLinkCollectionView',
	'hbs!../../templates/item/ProjectEntityViewTemplate',
	'hbs!../../templates/item/SourceEntityViewTemplate',
	'hbs!../../templates/item/ProtocolEntityViewTemplate',
	'hbs!../../templates/item/ExperimentEntityViewTemplate',
	'hbs!../../templates/item/EpochEntityViewTemplate',
	'hbs!../../templates/item/MeasurementEntityViewTemplate'
	],
	function( Backbone, Communicator, EntityViewTemplate, EntityLinkCollection, EntityLinkCollectionView, ProjectEntityViewTemplate, SourceEntityViewTemplate, ProtocolEntityViewTemplate, ExperimentEntityViewTemplate, EpochEntityViewTemplate, MeasurementEntityViewTemplate ) {
		'use strict';

		/* Return a ItemView class definition */
		return Backbone.Marionette.ItemView.extend({
			tagName: 'li',
			initialize: function() {},

			template: EntityViewTemplate,

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {
				'click': function() {
					var i, linksArray, links;
					if(!this.entityLinkCollection) {
						this.entityLinkCollection = new EntityLinkCollection();
						linksArray = [];
						links = this.model.get('links');
						for(i in links) {
							links[i]['display_name'] = i;
							linksArray.push(links[i]);
						}
						this.entityLinkCollection.reset(linksArray);
						this.entityLinkCollectionView = new EntityLinkCollectionView({
							collection: this.entityLinkCollection
						});
						this.$el.append(this.entityLinkCollectionView.$el);
						this.entityLinkCollectionView.render();
						this.listenTo(this.entityLinkCollectionView, 'entitylink:click', function(entityLinkModel) {
							this.trigger('entitylink:click', entityLinkModel);
						})
					}
					this.entityLinkCollectionView.$el.slideToggle();
					this.trigger('entity:click');
					return false;
				}
			},

			/* on render callback */
			onRender: function() {
				var container = this.$el.find('.entity-attributes-container:first'), entityTemplate;
				switch(this.model.get('type')) {
					case 'Project':
						entityTemplate = ProjectEntityViewTemplate;
						break;
					case 'Source':
						entityTemplate = SourceEntityViewTemplate;
						break;
					case 'Protocol':
						entityTemplate = ProtocolEntityViewTemplate;
						break;
					case 'Experiment':
						entityTemplate = ExperimentEntityViewTemplate;
						break;
					case 'Epoch':
						entityTemplate = EpochEntityViewTemplate;
						break;
					case 'Measurement':
						entityTemplate = MeasurementEntityViewTemplate;
						break;
				}
				if(entityTemplate) {
					container.html(entityTemplate(this.model.toJSON()));
				}	
			}
		});

	});
