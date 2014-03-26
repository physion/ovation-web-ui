(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/DataView'
		],
		function( Dataview ) {

			describe('Dataview Layout', function () {

				it('should be an instance of Dataview Layout', function () {
					var DataView = new Dataview();
					expect( DataView ).to.be.an.instanceof( Dataview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );