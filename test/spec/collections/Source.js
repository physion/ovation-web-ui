(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/Source'
		],
		function( Source ) {

			describe('Source Collection', function () {

				it('should be an instance of Source Collection', function () {
					var Source = new Source();
					expect( Source ).to.be.an.instanceof( Source );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );