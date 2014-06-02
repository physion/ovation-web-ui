define([
	'backbone',
	'hbs!../templates/PanelsViewTemplate'
	],
	function(Backbone, PanelsViewTemplate ){
		'use strict';

		return Backbone.View.extend({
			className: 'model-navigator-panels',
			template: PanelsViewTemplate,

			initialize: function() {
				this.$el.append(this.template());
				this.viewSitter = new Backbone.ChildViewContainer();
				this.viewContainerEl = this.$el.find('.model-navigator-panels-container');
			},

			addPanel: function(panel) {
				this.viewSitter.add(panel);
				this.viewContainerEl.append(panel.$el);
				panel.render();
				this.resize();
			},

			clearPanels: function(afterPanel) {
				var clickedPanelFound = false,
					viewsToRemove = [], view, i;
				this.viewSitter.each(function(view, i) {
					if(clickedPanelFound) {
						viewsToRemove.push(view);
					}
					else if(view.cid === afterPanel.cid) {
						clickedPanelFound = true;
					}
				});
				for(i = 0; i < viewsToRemove.length; i++) {
					this.viewSitter.remove(viewsToRemove[i]);
					viewsToRemove[i].remove();
				}
				this.resize();
			},

			resize: function() {
				var panelWidth = this.viewContainerEl.children().last().outerWidth();
				var newContainerWidth = panelWidth * this.viewSitter.length;
				this.viewContainerEl.width(newContainerWidth);
			},

			events: {}
		});
	});
