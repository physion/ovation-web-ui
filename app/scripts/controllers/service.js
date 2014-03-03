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
				url: '/api/v1/entities/bb1fda63-ee8a-46af-b986-958d924bfbch/experiments',
				proxy: 'mockdata/experiments.json'
			});
			$.mockjax({
				url: '/api/v1/entities/14c1dd90-69b3-0131-a68a-12313d009d02/epochs',
				proxy: 'mockdata/epochs.json'
			});
			$.mockjax({
				url: '/api/v1/entities/6f7cca39-3158-4998-bae6-3edd074b77dc/measurements',
				proxy: 'mockdata/measurements.json'
			});
		}
	});

});