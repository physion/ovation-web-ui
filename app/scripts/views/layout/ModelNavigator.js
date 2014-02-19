define([
	'backbone',
	'hbs!tmpl/layout/ModelNavigator',
	'views/collection/Project'
	],
	function( Backbone, ModelNavigatorTmpl, ProjectCollectionView ) {
		'use strict';

		/* Return a Layout class definition */
		return Backbone.Marionette.Layout.extend({

			className: 'model-navigator',
			template: ModelNavigatorTmpl,  

			initialize: function() {},

			regions: {
				navigatorView: '.navigator-view'
			},

			/* ui selector cache */
			ui: {},

			/* Ui events hash */
			events: {},

			/* on render callback */
			onRender: function() {
				this.navigatorView.show(new ProjectCollectionView({
					collection: this.model.get('projects')
				}));
			}
		});

	});
