define([
	'backbone',
	'hbs!tmpl/item/Source_tmpl'
],
function( Backbone, SourceTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Source ItemView");
		},
		
    	template: SourceTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
