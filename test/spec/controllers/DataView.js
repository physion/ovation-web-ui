(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/DataView'
		],
		function( Dataview ) {

			describe('Dataview Controller', function () {

				it('should be an instance of Dataview Controller', function () {
					var el = $('<div>');
					var region = new Backbone.Marionette.Region({
						el: el
					});
					var DataView = new Dataview({region: region});
					expect( DataView ).to.be.an.instanceof( Dataview );
				});

				it('should have more test written', function(){
					expect( true ).to.be.ok;
				});
			});

		});

}).call( this );