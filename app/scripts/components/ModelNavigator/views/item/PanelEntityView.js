define([
	'backbone',
	'hbs!../../templates/item/EntityViewTemplate',
	'../../collections/EntityLinkCollection',
	'../collection/EntityLinkCollectionView'
	],
	function( Backbone, EntityViewTemplate, EntityLinkCollection, EntityLinkCollectionView ) {
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
					return false;
				}
			},

			/* on render callback */
			onRender: function() {}
		});

	});
