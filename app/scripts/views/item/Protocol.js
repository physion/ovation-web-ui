define([
	'backbone',
	'hbs!tmpl/item/Protocol_tmpl'
],
function( Backbone, ProtocolTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Protocol ItemView");
		},
		
    	template: ProtocolTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
