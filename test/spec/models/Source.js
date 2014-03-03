(function() {
	'use strict';

	var root = this;

	root.define([
		'models/Source'
		],
		function( Source ) {

			describe('Source Model', function () {

				it('should be an instance of Source Model', function () {
					var Source = new Source();
					expect( Source ).to.be.an.instanceof( Source );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );