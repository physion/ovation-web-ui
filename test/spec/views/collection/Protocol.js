(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/Protocol'
		],
		function( Protocol ) {

			describe('Protocol Collectionview', function () {

				it('should be an instance of Protocol Collectionview', function () {
					var Protocol = new Protocol();
					expect( Protocol ).to.be.an.instanceof( Protocol );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );