define([
	'backbone',
	'mockjax'
],
function( Backbone ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			$.mockjax({
				url: '/api/v1/projects',
				response: function() {
					if(localStorage['projects'])
						this.responseText = localStorage['projects'];
					else
						this.responseText = '[]';
				}
			});
			$.mockjax({
				url: '/api/v1/sources',
				proxy: 'mockdata/sources.json'
			});
			$.mockjax({
				url: '/api/v1/protocols',
				proxy: 'mockdata/protocols.json'
			});
			$.mockjax({
				url: /^\/api\/v1\/entities\/.*experiments/,
				response: function() {
					if(localStorage['experiments'])
						this.responseText = localStorage['experiments'];
					else
						this.responseText = '[]';
				}				
			});
			$.mockjax({
				url: /^\/api\/v1\/entities\/.*projects/,
				proxy: 'mockdata/projects.json'
			});
			$.mockjax({
				url: /^\/api\/v1\/entities\/.*protocol/,
				proxy: 'mockdata/protocols.json'
			});
			$.mockjax({
				url: /^\/api\/v1\/entities\/.*epochs/,
				response: function() {
					if(localStorage['epochs'])
						this.responseText = localStorage['epochs'];
					else
						this.responseText = '[]';
				}	
			});
			$.mockjax({
				url: /^\/api\/v1\/entities\/.*epoch_groups/,
				response: function() {
					if(localStorage['epochGroups'])
						this.responseText = localStorage['epochGroups'];
					else
						this.responseText = '[]';
				}				
			});
			$.mockjax({
				url: /^\/api\/v1\/entities\/.*measurements/,
				proxy: 'mockdata/measurements.json'
			});
			/*
			Need attachments, analysis_records, equipment setup, epoch groups, 
			*/
		}
	});

});