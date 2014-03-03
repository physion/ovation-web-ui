(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/Source'
		],
		function( Source ) {

			describe('Source Itemview', function () {

				it('should be an instance of Source Itemview', function () {
					var Source = new Source();
					expect( Source ).to.be.an.instanceof( Source );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );