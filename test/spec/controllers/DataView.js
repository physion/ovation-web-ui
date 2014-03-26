(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/DataView'
		],
		function( Dataview ) {

			describe('Dataview Controller', function () {

				it('should be an instance of Dataview Controller', function () {
					var DataView = new Dataview();
					expect( DataView ).to.be.an.instanceof( Dataview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );