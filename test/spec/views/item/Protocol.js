(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/Protocol'
		],
		function( Protocol ) {

			describe('Protocol Itemview', function () {

				it('should be an instance of Protocol Itemview', function () {
					var Protocol = new Protocol();
					expect( Protocol ).to.be.an.instanceof( Protocol );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );