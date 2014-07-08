define([
		'backbone'
	],
	function( Backbone ) {

		var OvationServiceIndex = Backbone.Marionette.Controller.extend({

			initialize: function() {
				this.index = {};
			},

			addToIndex: function(modelOrCollection) {
				if(modelOrCollection instanceof Backbone.Model) {
					this.addModelToIndex(modelOrCollection);
				}
				else if(modelOrCollection instanceof Backbone.Collection) {
					modelOrCollection.each(function(model, i) {
						this.addModelToIndex(model);
					});
				}
			},

			addModelToIndex: function(model) {
				if(this.index[model.get('_id')] === undefined) {
					this.index[model.get('_id')] = model;
				}
			},

			getModel: function(id) {
				return this.index['id'];
			},

			addOrGetModel: function(model) {
				if(this.index[model.get('_id')] !== undefined) {
					return this.index[model.get('_id')];
				}
				else {
					this.addModelToIndex(model);
					return model;
				}
			}

		});

		return new OvationServiceIndex();

	});
