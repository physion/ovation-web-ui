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
				proxy: 'mockdata/projects.json'
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
				proxy: 'mockdata/experiments.json'
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
				proxy: 'mockdata/epochs.json'
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